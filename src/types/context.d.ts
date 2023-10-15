import { User } from "next-auth";
import { PrismaClient } from "../prisma";

export interface Context {
  db: PrismaClient;
  user?: User | null;
}
