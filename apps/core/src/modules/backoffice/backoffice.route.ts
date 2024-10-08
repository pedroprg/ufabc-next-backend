import { UserModel } from '@/models/User.js';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { Config } from '@/config/config.js';
import type { FastifyInstance } from 'fastify';

const devTokenSchema = z.object({
  email: z.string().email(),
});

export async function backofficeRoutes(app: FastifyInstance) {
  app.post('/token', async (request, reply) => {
    if (Config.NODE_ENV !== 'dev') {
      throw new Error('this route should not be called in prod');
    }

    const { email } = devTokenSchema.parse(request.body);
    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return reply.notFound('User not found');
    }

    const token = jwt.sign(
      {
        _id: user._id,
        ra: user.ra,
        confirmed: user.confirmed,
        email: user.email,
        permissions: user.permissions ?? [],
      },
      Config.JWT_SECRET,
      {
        expiresIn: '3h',
      },
    );

    return {
      token,
    };
  });
}
