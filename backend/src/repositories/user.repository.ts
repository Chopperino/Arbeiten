import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { DbUser } from "../types/database/DbUser";

const prisma = new PrismaClient();

export function createUser(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  }) as unknown as PrismaPromise<DbUser>;
}

export function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {email},
  }) as unknown as PrismaPromise<DbUser>;
}

export function findUserById(id: string) {
  return prisma.user.findUnique({
    where: {id},
  }) as unknown as PrismaPromise<DbUser>;
}

export function updateUser(id: string, data: Prisma.UserUncheckedUpdateInput) {
  return prisma.user.update({
    where: {id},
    data
  }) as unknown as PrismaPromise<DbUser>
}

export function deleteUser(id: string) {
  return prisma.user.delete({
    where: {id},
  }) as unknown as PrismaPromise<DbUser>
}