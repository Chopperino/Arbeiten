import { UserRole } from "@prisma/client";

export class UserGetResponse {
  email: string;
  username: string;
  name?: string;
  bio?: string;
  role: UserRole;
  createdAt: Date;
}