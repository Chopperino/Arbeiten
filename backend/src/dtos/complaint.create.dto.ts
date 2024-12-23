import { IsNotEmpty, IsOptional } from "class-validator";

export class ComplaintCreateDto {

  @IsNotEmpty()
  description: string;

  @IsOptional()
  userId?: string;

  @IsOptional()
  vacancyId?: string;
}