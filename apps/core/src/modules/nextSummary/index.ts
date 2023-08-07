import type { FastifyInstance } from 'fastify';
import { nextSummaryHandler } from './nextSummary.routes';

export default async function nextSummary(app: FastifyInstance) {
  app.get('/summary', nextSummaryHandler);
}