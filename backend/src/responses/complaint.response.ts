import { User, Vacancy } from "@prisma/client";

export class ComplaintResponse {
  description: string;
  author: User;
  targetUser?: User;
  targetVacancy?: Vacancy;
  /*authorId: string;
  userId?: string;
  vacancyId?: string;*/
}