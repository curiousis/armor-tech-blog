import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import argon2 from 'argon2';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

async function authorize(credentials) {
  try {
    const { email, password } = schema.parse(credentials);
    const response = await sql`SELECT * FROM users WHERE email = ${email}`;
    const user = response.rows[0];
    const passwordMatch = user && (await argon2.verify(user.password, password));

    if (passwordMatch) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    }
  } catch (error) {
    return null
  }

  return Promise.resolve(null);
}

const callbacks = {
  session: async ({ session, token }) => {
    if (session?.user) {
      // @ts-ignore
      session.user.role = token.role;
    }
    return session;
  },
  jwt: async ({ user, token }) => {
    if (user) {
      token.role = user.role;
    }
    return token;
  },
}

const authentication = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize,
    }),
  ],
  callbacks,
});

const GET = authentication;
const POST = authentication;

export { GET, POST };

