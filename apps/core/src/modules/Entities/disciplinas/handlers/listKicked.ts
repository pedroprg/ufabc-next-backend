import { courseId, currentQuad } from '@next/common';
import { sortBy as LodashSortBy } from 'lodash-es';
import { DisciplinaModel, type Disciplina } from '@/models/Disciplina.js';
import { StudentModel } from '@/models/Student.js';
import { z } from 'zod';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { getCourses, getKickedStudents } from '../component.service.js';

const validatedParams = z.object({
  componentId: z.coerce.number().int(),
});
const validatedQueryParam = z.object({
  sort: z.string().optional(),
});

export async function listKicked(request: FastifyRequest, reply: FastifyReply) {
  const { componentId } = validatedParams.parse(request.params);
  const { sort } = validatedQueryParam.parse(request.query);

  if (!componentId) {
    return reply.badRequest('Missing DisciplinaId');
  }

  const season = currentQuad();
  const component = await DisciplinaModel.findOne({
    season,
    disciplina_id: componentId,
  });

  if (!component) {
    return reply.notFound('component not found');
  }

  // create sort mechanism
  const kicks = sort || kickRule(component.ideal_quad);
  // @ts-expect-error for now
  const order = [kicks.length || 0].fill('desc');
  // turno must have a special treatment
  const turnoIndex = kicks.indexOf('turno');
  if (turnoIndex !== -1) {
    // @ts-expect-error for now
    order[turnoIndex] = component.turno === 'diurno' ? 'asc' : 'desc';
  }

  const isAfterKick = [component.after_kick].filter(Boolean).length;
  const resolveKicked = resolveEnrolled(component, isAfterKick);

  const kickedMap = new WeakMap(
    resolveKicked.map((kicked) => [kicked, kicked.studentId]),
  );
  const students = await getKickedStudents(
    resolveKicked.map((kicked) => kicked.studentId),
  );
  const courses = await getCourses();
  const interCourses = [
    'Bacharelado em Ciência e Tecnologia',
    'Bacharelado em Ciências e Humanidades',
  ];
  // return courses;
  const interCourseIds = courses
    .flatMap(({ _id: name, ids }) => {
      const isInterCourse = interCourses.includes(name) ? name : null;

      if (!isInterCourse) {
        return null;
      }
      return ids;
    })
    .filter(Boolean);

  // return interCourseIds;

  const obrigatorias = getObrigatoriasFromComponents(
    component.obrigatorias,
    interCourseIds,
  );

  const studentsWithGraduation = students.map((student) => {
    const reserva = obrigatorias.includes(student.cursos.id_curso);
    const graduationToStudent = Object.assign(
      {
        aluno_id: student.aluno_id,
        cr: '-',
        cp: student.cursos.cp,
        ik: reserva ? student.cursos.ind_afinidade : 0,
        reserva,
        turno: student.cursos.turno,
        curso: student.cursos.nome_curso,
      },
      kickedMap.get({ studentId: student.aluno_id }) || {},
    );

    return graduationToStudent;
  });

  const sortedStudents = LodashSortBy(studentsWithGraduation, kicks);

  const uniqueStudents = [];
  const uniqueStudentIds = new Set();

  for (const student of sortedStudents) {
    if (!uniqueStudentIds.has(student.aluno_id)) {
      uniqueStudents.push(student);
      uniqueStudentIds.add(student.aluno_id);
    }
  }

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

function resolveEnrolled(component: Disciplina, isAfterKick: number) {
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
