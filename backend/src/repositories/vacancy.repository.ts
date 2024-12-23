import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { DbVacancy } from "../types/database/DbVacancy";

export class VacancyRepository {
  constructor(private prisma: PrismaClient) {}

  public create(data: Prisma.VacancyUncheckedCreateInput) {
    return this.prisma.vacancy.create({
      data,
    }) as unknown as PrismaPromise<DbVacancy>
  }

  public update(id: string, data: Prisma.VacancyUncheckedUpdateInput) {
    return this.prisma.vacancy.update({
      where: {id},
      data,
    }) as unknown as PrismaPromise<DbVacancy>
  }

  public findById(id: string) {
    return this.prisma.vacancy.findUnique({
      where: {id},
    }) as unknown as PrismaPromise<DbVacancy>
  }

  public delete(id: string) {
    return this.prisma.vacancy.delete({
      where: {id},
    }) as unknown as PrismaPromise<DbVacancy>
  }
}