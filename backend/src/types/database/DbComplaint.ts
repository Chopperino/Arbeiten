import { Complaint, User, Vacancy } from "@prisma/client";

export class DbComplaint implements Complaint{
  id: string;
  description: string;
  vacancies: Vacancy[];
  users: User[];
}