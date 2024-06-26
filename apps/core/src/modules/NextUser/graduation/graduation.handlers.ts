import type { FastifyRequest } from "fastify";
import type { GraduationService } from "./graduation.service.js";

export class GraduationHandler {
  constructor(private readonly graduationService: GraduationService) {}

  async listGraduations(
    request: FastifyRequest<{ Querystring: { limit: number } }>,
  ) {
    const { limit } = request.query;
    const graduations = await this.graduationService.findGraduations({}, limit);
    return graduations;
  }

  async listGraduationsSubjects() {
    // TODO: use request.query on service
    const graduationsSubjects =
      await this.graduationService.findGraduationsSubject();
    return graduationsSubjects;
  }

  async listGraduationSubjectsByGraduationId(
    request: FastifyRequest<{
      Params: { graduationId: number };
      Querystring: { limit: number };
    }>,
  ) {
    const { graduationId } = request.params;
    const limit = request.query.limit || 200;
    const graduationsSubjects =
      await this.graduationService.listGraduationSubjects(limit, graduationId);
    return { docs: graduationsSubjects };
  }
}
