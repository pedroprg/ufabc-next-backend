import { type FastifyServerOptions, fastify } from 'fastify';
import { Config } from './config/config.js';

// Plugins
import mongoose from './plugins/mongoose.js';
import redis from './plugins/redis.js';
import jwtAuth from './plugins/jwt.js';
import cors from './plugins/cors.js';
import oauth2 from './plugins/oauth2/oauth2.js';

// Routes
import { nextRoutes, publicRoutes } from './modules/routes.js';

export async function buildApp(opts: FastifyServerOptions = {}) {
  const app = fastify(opts);
  try {
    // plugins
    await app.register(cors);
    await app.register(mongoose, {
      connectionUrl: Config.MONGODB_CONNECTION_URL,
    });
    await app.register(redis, {
      username: Config.REDIS_USER,
      password: Config.REDIS_PASSWORD,
      host: Config.REDIS_HOST,
      port: Config.REDIS_PORT,
    });
    await app.register(jwtAuth, {
      secret: Config.JWT_SECRET,
    });
    await app.register(oauth2, {
      googleId: Config.OAUTH_GOOGLE_CLIENT_ID,
      googleSecret: Config.OAUTH_GOOGLE_SECRET,
      facebookId: Config.OAUTH_FACEBOOK_CLIENT_ID,
      facebookSecret: Config.OAUTH_FACEBOOK_SECRET,
    });
    // routes
    await app.register(publicRoutes);
    await app.register(nextRoutes, {
      prefix: '/v2',
    });
  } catch (error) {
    app.log.fatal({ error }, 'build app error');
    throw error;
  }

  return app;
}
