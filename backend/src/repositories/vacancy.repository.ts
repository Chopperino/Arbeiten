import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { DbVacancy } from "../types/database/DbVacancy";

const prisma = new PrismaClient();

export function createVacancy(data: Prisma.VacancyUncheckedCreateInput) {
  return prisma.vacancy.create({
    data,
  }) as unknown as PrismaPromise<DbVacancy>
}

export function updateVacancy(id: string, data: Prisma.VacancyUncheckedUpdateInput) {
  return prisma.vacancy.update({
    where: {id},
    data,
  }) as unknown as PrismaPromise<DbVacancy>
}

export function findVacancy(id: string) {
  return prisma.vacancy.findUnique({
    where: {id},
  }) as unknown as PrismaPromise<DbVacancy>
}

export function deleteVacancy(id: string) {
  return prisma.vacancy.delete({
    where: {id},
  }) as unknown as PrismaPromise<DbVacancy>
}