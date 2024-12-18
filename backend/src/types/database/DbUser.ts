import { Complaint, User, UserRole, Vacancy } from "@prisma/client";

export class DbUser implements User {
  id: string;
  email: string;
  password: string;
  username: string;
  name: string | null;
  bio: string | null;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  createdVacancies: Vacancy[];
  appliedVacancies: Vacancy[];
  complaints: Complaint[];
}