import { Complaint, User, Vacancy, VacancyStatus } from "@prisma/client";

export class DbVacancy implements Vacancy{
  id: string;
  name: string;
  status: VacancyStatus;
  description: string;
  requirements: string;
  location: string;
  salary: string;
  author: User;
  authorId: string;
  applicants: User[];
  complaints: Complaint[];
  createdAt: Date;
  updatedAt: Date;
}