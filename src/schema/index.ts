import { Context } from "@/types/context";
import { AuthChecker, Query, Resolver, buildSchemaSync } from "type-graphql";

@Resolver()
class DummyResolver {
  @Query((_returns) => String)
  hello() {
    return "Nice to meet you";
  }
}

const authChecker: AuthChecker<Context> = ({ context }) => {
  const { user } = context;
  return Boolean(user);
};

export const schema = buildSchemaSync({
  resolvers: [DummyResolver],
  authChecker,
  emitSchemaFile: process.env.NODE_ENV === "development",
});
