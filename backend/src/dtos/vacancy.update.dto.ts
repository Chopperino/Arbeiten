import {IsNotEmpty, IsOptional} from "class-validator";
import {VacancyStatus} from "@prisma/client";

export class VacancyUpdateDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  status: VacancyStatus;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  requirements: string;

  @IsOptional()
  location?: string;

  @IsNotEmpty()
  salary: string;
}