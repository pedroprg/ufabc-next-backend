import { type currentQuad, findIds } from '@next/common';
import { type Student, StudentModel } from '@/models/Student.js';
import type { FastifyReply, FastifyRequest } from 'fastify';
import type { HistoryService } from './history.service.js';

// type UserHistoryRequest = {
//   Body: {
//     ra: number;
//     grade: string;
//     mandatory_credits_number: number;
//     limited_credits_number: number;
//     free_credits_number: number;
//     credits_total: number;
//     curso: string;
//   };
// };

type UserHistoryRequest = {
  Body: {
    updateTime: Date;
    curso: string; //"CIÊNCIA E TECNOLOGIA/PROGRAD/BI - SANTO ANDRÉ - BACHARELADO - N";
    ra: string;
    disciplinas: Array<{
      ano: string;
      periodo: string;
      codigo: string;
      situacao: string | '--';
      resultado: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'O'
    }>;
  };
};

export class HistoryHandler {

  constructor(private readonly historyService: HistoryService) { }

  async userHistory(
    request: FastifyRequest<UserHistoryRequest>,
    reply: FastifyReply,
  ) {
    const extensionHistory = request.body;

    // pegar request e adicionar um novo atributo grade 
    let HistoriesAgregado = {
      extension: extensionHistory,
      grade: "2017"

    }
    // validar ra 
    if (!extensionHistory.ra) {
      reply.badRequest('An User RA must be passed');
    }

    // @ts-expect-error fix later
    const cleanedCourseName = this.normalizeCourseName(extensionHistory.curso);
    extensionHistory.curso = cleanedCourseName;
    const shouldUpdateGraduation =
      !!HistoriesAgregado.Body.curso && !!HistoriesAgregado.grade;

    if (shouldUpdateGraduation) {
      // @ts-expect-error fix later
      await this.updateUserGraduation(extensionHistory, this.historyService);
    }

    await this.historyService.createUserHistory(HistoriesAgregado);

    return {
      msg: 'UserHistory Synced',
    };
  }

  async historiesCourses(
    request: FastifyRequest<{
      Querystring: { season: ReturnType<typeof currentQuad> };
    }>,
  ) {
    const { season } = request.query;
    const seasonCourses = await findIds<Student>(StudentModel, season);
    return seasonCourses;
  }

  async historiesTest(request: FastifyRequest<History>, reply: FastifyReply) {

    const extensionHistory = request.body;

    if (!extensionHistory.ra) {
      reply.badRequest('An User RA must be passed');
    }

    // @ts-expect-error fix later
    const cleanedCourseName = this.normalizeCourseName(extensionHistory.curso);
    extensionHistory.curso = cleanedCourseName;
    const shouldUpdateGraduation =
      !!extensionHistory.curso && !!extensionHistory.grade;

    if (shouldUpdateGraduation) {
      // @ts-expect-error fix later
      await this.updateUserGraduation(extensionHistory, this.historyService);
    }

    await this.historyService.createUserHistory(extensionHistory);

    return {
      msg: 'UserHistory Synced',
    };


  }


}
