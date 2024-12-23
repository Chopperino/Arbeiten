import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { DbComplaint } from "../types/database/DbComplaint";

export class ComplaintRepository {
  constructor(private prisma: PrismaClient) {
  }

  public create(data: Prisma.ComplaintUncheckedCreateInput) {
    return this.prisma.complaint.create({
      data,
    }) as unknown as PrismaPromise<DbComplaint>
  }

  public update(id: string, data: Prisma.ComplaintUncheckedUpdateInput) {
    return this.prisma.complaint.update({
      where: {id},
      data,
    }) as unknown as PrismaPromise<DbComplaint>
  }

  public findById(id: string) {
    return this.prisma.complaint.findUnique({
      where: {id},
    }) as unknown as PrismaPromise<DbComplaint>
  }

  public delete(id: string) {
    return this.prisma.complaint.delete({
      where: {id},
    }) as unknown as PrismaPromise<DbComplaint>
  }
}