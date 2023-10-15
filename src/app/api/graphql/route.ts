import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { schema } from "@/schema";
import { Context } from "@/types/context";

const server = new ApolloServer({ schema });

const handler = startServerAndCreateNextHandler(server, {
  context: async (): Promise<Context> => {
    const session = await getAuthSession();

    return { user: session?.user, db };
  },
});

export { handler as GET, handler as POST };
