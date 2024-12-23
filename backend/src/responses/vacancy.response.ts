import { User, VacancyStatus } from "@prisma/client";

export class VacancyResponse {
  name: string;
  status: VacancyStatus;
  description: string;
  requirements: string;
  location?: string;
  salary: string;
  applicants: User[];
  createdAt: Date;
  updatedAt: Date;
}