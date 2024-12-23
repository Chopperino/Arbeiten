import { User, VacancyStatus } from "@prisma/client";

export class VacancyResponse {
  id: string;
  name: string;
  status: VacancyStatus;
  description: string;
  requirements: string;
  location?: string;
  salary: string;
  authorId: string;
  applicants: User[];
  createdAt: Date;
  updatedAt: Date;
}