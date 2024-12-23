import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { DbUser } from "../types/database/DbUser";

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  public create(data: Prisma.UserUncheckedCreateInput) {
    return this.prisma.user.create({
      data,
    }) as unknown as PrismaPromise<DbUser>;
  }

  public findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {email},
    }) as unknown as PrismaPromise<DbUser>;
  }

  public findById(id: string) {
    return this.prisma.user.findUnique({
      where: {id},
    }) as unknown as PrismaPromise<DbUser>;
  }

  public update(id: string, data: Prisma.UserUncheckedUpdateInput) {
    return this.prisma.user.update({
      where: {id},
      data
    }) as unknown as PrismaPromise<DbUser>;
  }

  public delete(id: string) {
    return this.prisma.user.delete({
      where: {id},
    }) as unknown as PrismaPromise<DbUser>
  }
}