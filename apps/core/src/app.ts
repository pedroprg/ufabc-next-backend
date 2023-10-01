import { fastify, type FastifyServerOptions } from 'fastify';
import fastifyAutoload from '@fastify/autoload';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Config } from './config/config.js';

const dirEsm = dirname(fileURLToPath(import.meta.url));

export async function buildApp(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);
  try {
    app.register(fastifyAutoload, {
      dir: join(dirEsm, 'plugins'),
      dirNameRoutePrefix: false,
      encapsulate: false,
      maxDepth: 1,
      options: Config,
      forceESM: true,
    });
    app.register(fastifyAutoload, {
      dir: join(dirEsm, 'modules'),
      dirNameRoutePrefix: false,
      encapsulate: true,
      maxDepth: 1,
      // ignorePattern: /^.*(?:handlers)$/,
    });
  } catch (error) {
    app.log.fatal({ error }, 'build app error');
    throw error;
  }

  return app;
}
