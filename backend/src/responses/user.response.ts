import { UserRole } from "@prisma/client";

export class UserResponse {
  id: string;
  email: string;
  username: string;
  name?: string;
  bio?: string;
  role: UserRole;
  createdAt: Date;
}