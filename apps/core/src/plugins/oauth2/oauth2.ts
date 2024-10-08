import { type OAuth2Namespace, fastifyOauth2 } from '@fastify/oauth2';
import { fastifyPlugin as fp } from 'fastify-plugin';
import { Config } from '@/config/config.js';
import { objectKeys } from './utils/objectKeys.js';
import { type Querystring, handleOauth } from './handler.js';
import { supportedProviders } from './supportedProviders.js';
import type { FastifyInstance, FastifyRequest } from 'fastify';

export type NextOauthOptions = {
  googleId: Config['OAUTH_GOOGLE_CLIENT_ID'];
  googleSecret: Config['OAUTH_GOOGLE_SECRET'];
  facebookId?: string;
  facebookSecret?: string;
};

async function oauth2(app: FastifyInstance, opts: NextOauthOptions) {
  const providers = supportedProviders(opts, fastifyOauth2);

  for (const provider of objectKeys(providers)) {
    const startRedirectPath = `/login/${provider}`;
    const callbackUri = `${Config.PROTOCOL}://${Config.HOST}:${Config.PORT}/login/${provider}/callback`;

    await app.register(fastifyOauth2, {
      name: provider,
      credentials: {
        client: {
          id: providers[provider].credentials.client.id,
          secret: providers[provider].credentials.client.secret,
        },
        auth: providers[provider].config,
      },
      scope: providers[provider].scope,
      startRedirectPath,
      callbackUri,
    });

    app.get(
      `/login/${provider}/callback`,
      async function (
        request: FastifyRequest<{ Querystring: Querystring }>,
        reply,
      ) {
        try {
          await handleOauth.call(this, provider, request, reply, providers);
        } catch (error) {
          // @ts-expect-error fix types
          if (error?.data?.payload) {
            // Google Error
            // @ts-expect-error fix types
            reply.log.error({ error: error.data.payload }, 'Error in oauth2');
            // @ts-expect-error fix types
            return error.data.payload;
          }

          // Unknwon (probably db) error
          return reply.internalServerError(`${error}`);
        }
      },
    );
  }
}

export default fp(oauth2, { name: 'NextOauth2' });

declare module 'fastify' {
  export interface FastifyInstance {
    google: OAuth2Namespace;
    facebook: OAuth2Namespace;
  }
}
