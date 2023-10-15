import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXT_AUTH_SECRET,
} from "@/configs/constants";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: NEXT_AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/", newUser: "/" },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,

      profile: (profile) => {
        return { ...profile, emailVerified: profile?.email_verified };
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      const userFromDb = await db.user.findUnique({
        where: { id: user.id },
      });

      if (!userFromDb) {
        token.id = user.id;
        return token;
      }

      const { id, email, name } = userFromDb;

      return { id, name, email };
    },

    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
