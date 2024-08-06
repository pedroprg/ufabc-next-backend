import {
  batchInsertItems,
  convertUfabcDisciplinas,
  currentQuad,
  generateIdentifier,
  parseResponseToJson,
} from '@next/common';
import { ofetch } from 'ofetch';
import { DisciplinaModel } from '@/models/Disciplina.js';
import { SubjectModel } from '@/models/Subject.js';
import { validateSubjects } from '../utils/validateSubjects.js';
import type { FastifyReply, FastifyRequest } from 'fastify';

export type SyncDisciplinasRequest = {
  // Rename subjects that we already have
  Body: { mappings?: Record<string, string> };
};

type UfabcDisciplina = ReturnType<typeof convertUfabcDisciplinas>;

export async function syncDisciplinasHandler(
  request: FastifyRequest<SyncDisciplinasRequest>,
  reply: FastifyReply,
) {
  const { mappings } = request.body || {};
  const season = currentQuad();
  const rawUfabcDisciplinas = await ofetch<any[]>(
    'https://matricula.ufabc.edu.br/cache/todasDisciplinas.js',
    {
      parseResponse: parseResponseToJson,
    },
  );
  const UfabcDisciplinas: UfabcDisciplina[] = rawUfabcDisciplinas.map(
    (ufabcDisciplina) => convertUfabcDisciplinas(ufabcDisciplina),
  );

  if (!UfabcDisciplinas) {
    request.log.warn({ msg: 'Error in Ufabc Disciplinas', UfabcDisciplinas });
    return reply.badRequest('Could not parse disciplinas');
  }

  const subjects = await SubjectModel.find({});
  // check if subjects actually exists before creating the relation
  const missingSubjects = validateSubjects(
    UfabcDisciplinas,
    subjects,
    mappings,
  );
  const uniqSubjects = [...new Set(missingSubjects)];
  if (missingSubjects.length > 0) {
    request.log.warn({
      msg: 'Some subjects are missing',
      missing: uniqSubjects,
    });
    return reply.status(400).send({
      message:
        'Subject not in the database, check logs to see missing subjects',
      uniqSubjects,
    });
  }

  const start = Date.now();
  const insertDisciplinasErrors = await batchInsertItems(
    UfabcDisciplinas,
    (disciplina) => {
      return DisciplinaModel.findOneAndUpdate(
        {
          disciplina_id: disciplina?.disciplina_id,
          identifier: generateIdentifier(disciplina),
          season,
        },
        disciplina,
        { upsert: true, new: true },
      );
    },
  );

  if (insertDisciplinasErrors.length > 0) {
    request.log.error({
      msg: 'Something bad happened',
      insertDisciplinasErrors,
    });
    return reply.internalServerError('Error inserting disciplinas');
  }

  return {
    status: 'Sync disciplinas successfully',
    time: Date.now() - start,
  };
}
