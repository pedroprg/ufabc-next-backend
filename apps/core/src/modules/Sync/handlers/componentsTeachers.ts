import { createHash } from 'node:crypto';
import { batchInsertItems, generateIdentifier } from '@next/common';
import { TeacherModel } from '@/models/Teacher.js';
import { ComponentModel } from '@/models/Component.js';
import { z } from 'zod';
import { ufProcessor } from '@/services/ufprocessor.js';
import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Types } from 'mongoose';

const validateComponentTeachersBody = z.object({
  hash: z.string().optional(),
  season: z.string(),
  link: z.string({
    message: 'O Link deve ser passado',
  }),
  // util to ignore when UFABC send bad data
  ignoreErrors: z.boolean().optional().default(false),
});

export async function componentsTeachers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { season, hash, link, ignoreErrors } =
    validateComponentTeachersBody.parse(request.body);
  const teachers = await TeacherModel.find({}).lean(true);
  const teacherMap = new Map<string, Types.ObjectId>();
  for (const teacher of teachers) {
    teacherMap.set(teacher.name.toLocaleLowerCase(), teacher._id);
    for (const alias of teacher?.alias || []) {
      teacherMap.set(alias, teacher._id);
    }
  }
  const componentsWithTeachers = await ufProcessor.getComponentsFile(link);
  const errors: string[] = [];
  const nextComponentWithTeachers = componentsWithTeachers.map((component) => {
    if (!component.name) {
      errors.push(
        `Missing required field for component: ${component.UFComponentCode || 'Unknown'}`,
      );
    }

    if (
      component.teachers?.professor &&
      !teacherMap.has(component.teachers.professor)
    ) {
      errors.push(component.teachers.professor);
    }
    if (
      component.teachers?.practice &&
      !teacherMap.has(component.teachers.practice)
    ) {
      errors.push(component.teachers.practice);
    }

    const findTeacher = (name: string | null) => {
      if (!name) {
        return null;
      }

      return teacherMap.get(name) || null;
    };

    return {
      disciplina_id: component.UFComponentId,
      codigo: component.UFComponentCode,
      disciplina: component.name,
      campus: component.campus,
      turma: component.turma,
      turno: component.turno,
      vagas: component.vacancies,
      teoria: findTeacher(component.teachers?.professor),
      pratica: findTeacher(component.teachers?.practice),
      season,
    };
  });

  if (!ignoreErrors && errors.length > 0) {
    return reply.status(403).send({
      msg: 'Missing professors while parsing',
      names: [...new Set(errors)],
    });
  }

  const disciplinaHash = createHash('md5')
    .update(JSON.stringify(nextComponentWithTeachers))
    .digest('hex');

  if (disciplinaHash !== hash) {
    return {
      hash: disciplinaHash,
      errors: [...new Set(errors)],
      total: nextComponentWithTeachers.length,
      payload: nextComponentWithTeachers,
    };
  }

  const start = Date.now();
  const insertComponentsErrors = await batchInsertItems(
    nextComponentWithTeachers,
    async (component) => {
      // @ts-ignore migrating
      const identifier = generateIdentifier(component);
      await ComponentModel.findOneAndUpdate(
        {
          identifier,
          season,
        },
        {
          $set: {
            teoria: component.teoria,
            pratica: component.pratica,
          },
        },
        { new: true },
      );
    },
  );

  if (insertComponentsErrors.length > 0) {
    request.log.error({
      msg: 'errors happened during insert',
      errors: insertComponentsErrors,
    });
    return reply.internalServerError('Error inserting disciplinas');
  }

  return {
    status: 'ok',
    time: Date.now() - start,
    errors: [...new Set(errors)],
  };
}
