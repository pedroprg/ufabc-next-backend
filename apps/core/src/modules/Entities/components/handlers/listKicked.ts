import { currentQuad } from '@next/common';
import { orderBy as LodashOrderBy } from 'lodash-es';
import { z } from 'zod';
import { ComponentModel, type Component } from '@/models/Component.js';
import { StudentRepository } from '../../students/students.repository.js';
import { StudentModel } from '@/models/Student.js';
import { GraduationHistoryModel } from '@/models/GraduationHistory.js';
import type { FastifyReply, FastifyRequest } from 'fastify';

const validatedParams = z.object({
  componentId: z.coerce.number().int(),
});
const validatedQueryParam = z.object({
  sort: z.enum(['reserva', 'turno', 'ik', 'cp', 'cr']).optional(),
});

const StudentService = new StudentRepository(
  StudentModel,
  GraduationHistoryModel,
  ComponentModel,
);

export async function listKicked(request: FastifyRequest, reply: FastifyReply) {
  const { componentId } = validatedParams.parse(request.params);
  const { sort } = validatedQueryParam.parse(request.query);

  if (!componentId) {
    return reply.badRequest('Missing DisciplinaId');
  }

  const season = currentQuad();
  const component = await ComponentModel.findOne({
    season,
    disciplina_id: componentId,
  });

  if (!component) {
    return reply.notFound('component not found');
  }

  // create sort mechanism
  const kicks = sort ? [sort] : kickRule(component.ideal_quad);
  // turno must have a special treatment
  const order = kicks.map((kick) =>
    kick === 'turno' ? (component.turno === 'diurno' ? 'asc' : 'desc') : 'desc',
  );

  const isAfterKick = component.after_kick
    ? component.after_kick.length > 0
    : false;
  const resolveKicked = resolveEnrolled(component, isAfterKick);
  const kickedMap = new Map(
    resolveKicked.map((kicked) => [kicked.studentId, kicked]),
  );
  const students = await StudentService.kickedStudents(
    resolveKicked.map((kicked) => kicked.studentId),
  );
  const courses = await StudentService.studentCourses();
  const interCourses = [
    'Bacharelado em Ciência e Tecnologia',
    'Bacharelado em Ciências e Humanidades',
  ];

  const interCourseIds = courses
    .filter(({ _id: name }) => interCourses.includes(name))
    .flatMap(({ ids }) => ids);

  const obrigatorias = getObrigatoriasFromComponents(
    component.obrigatorias,
    interCourseIds,
  );

  const studentsWithGraduation = students.map((student) => {
    const reserva = obrigatorias.includes(student.cursos.id_curso);
    const kickedInfo = kickedMap.get(student.aluno_id);
    const graduationToStudent = {
      studentId: student.aluno_id,
      cr: '-',
      cp: student.cursos.cp,
      ik: reserva ? student.cursos.ind_afinidade : 0,
      reserva,
      turno: student.cursos.turno,
      curso: student.cursos.nome_curso,
      ...(kickedInfo || {}),
    };

    return graduationToStudent;
  });

  const sortedStudents = LodashOrderBy(studentsWithGraduation, kicks, order);

  const uniqueStudents = Array.from(
    new Map(
      sortedStudents.map((student) => [student.studentId, student]),
    ).values(),
  );

  return uniqueStudents;
}

function kickRule(idealQuad: boolean) {
  const season = currentQuad();
  let coeffRule = null;
  if (
    season === '2020:2' ||
    season === '2020:3' ||
    season === '2021:1' ||
    season === '2021:2' ||
    season === '2021:3' ||
    season === '2022:1' ||
    season === '2022:2' ||
    season === '2022:3' ||
    season === '2023:1' ||
    season === '2023:2' ||
    season === '2023:3' ||
    season === '2024:1' ||
    season === '2024:2' ||
    season === '2024:3' ||
    season === '2025:1'
  ) {
    coeffRule = ['cp', 'cr'];
  } else {
    coeffRule = idealQuad ? ['cr', 'cp'] : ['cp', 'cr'];
  }

  return ['reserva', 'turno', 'ik'].concat(coeffRule);
}

function resolveEnrolled(component: Component, isAfterKick: boolean) {
  const {
    after_kick: afterKick,
    alunos_matriculados: enrolledStudents,
    before_kick: beforeKick,
  } = component;
  // if kick has not arrived, no one has been kicked
  if (!isAfterKick) {
    const registeredStudents = enrolledStudents || [];
    return registeredStudents.map((student) => ({
      studentId: student,
    }));
  }

  // check diff between before_kick and after_kick
  const kicked = beforeKick.filter((kick) => !afterKick.includes(kick));
  // return who has been kicked
  return beforeKick.map((student) => ({
    studentId: student,
    kicked: kicked.includes(student),
  }));
}

function getObrigatoriasFromComponents(
  obrigatorias: number[],
  filterList: number[],
) {
  const removeSet = new Set(filterList);
  return obrigatorias.filter((obrigatoria) => !removeSet.has(obrigatoria));
}
