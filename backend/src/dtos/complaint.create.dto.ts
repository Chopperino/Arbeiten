import { IsNotEmpty } from "class-validator";

export class ComplaintCreateDto {

  @IsNotEmpty()
  description: string;

  @IsNotEmpty
  authorId: string;

  userId?: string

  vacancyId?: string
}