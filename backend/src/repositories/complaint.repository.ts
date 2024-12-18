import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { DbComplaint } from "../types/database/DbComplaint";

const prisma = new PrismaClient();

export function createComplaint(data: Prisma.ComplaintUncheckedCreateInput) {
  return prisma.complaint.create({
    data,
  })
}

export function updateComplaint(id: string, data: Prisma.ComplaintUncheckedUpdateInput) {
  return prisma.complaint.update({
    where: {id},
    data,
  }) as unknown as PrismaPromise<DbComplaint>
}

export function findComplaint(id: string) {
  return prisma.complaint.findUnique({
    where: {id},
  }) as unknown as PrismaPromise<DbComplaint>
}

export function deleteComplaint(id: string) {
  return prisma.complaint.delete({
    where: {id},
  }) as unknown as PrismaPromise<DbComplaint>
}