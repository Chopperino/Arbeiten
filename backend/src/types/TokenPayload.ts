import { JwtPayload } from "jsonwebtoken";
import { IsEnum, IsNotEmpty, IsUUID } from "class-validator";
import { UserRole } from "@prisma/client";

export class TokenPayload implements JwtPayload {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  userRole: UserRole;

  [ key: string ]: any;
}