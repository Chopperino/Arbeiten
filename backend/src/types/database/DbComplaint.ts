import { Complaint, User, Vacancy } from "@prisma/client";

export class DbComplaint implements Complaint{
  id: string;
  description: string;
  author: User;
  authorId: string;
  targetUser: User | null;
  userId: string | null;
  targetVacancy: Vacancy | null;
  vacancyId: string | null;
}