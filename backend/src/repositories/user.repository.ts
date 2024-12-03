import { PrismaClient, PrismaPromise, UserRole } from "@prisma/client";
import { DbUser } from "../../types/database/DbUser";

const prisma = new PrismaClient();

export function createUser(email: string, username: string, password: string, role: UserRole) {
  return prisma.user.create({
    data: {
      email,
      password,
      username,
      role,
    }
  }) as unknown as PrismaPromise<DbUser>;
}

export function findUser(email: string) {
  return prisma.user.findUnique({
    where: {email},
  }) as unknown as PrismaPromise<DbUser>;
}