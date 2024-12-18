import { IsEmail, IsNotEmpty } from "class-validator";
import { UserRole } from "@prisma/client";

export class UserCreateDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  role: UserRole;
}