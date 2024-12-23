import { IsNotEmpty, IsOptional } from "class-validator";

export class VacancyCreateDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  requirements: string;

  @IsOptional()
  location?: string;

  @IsNotEmpty()
  salary: string;
}