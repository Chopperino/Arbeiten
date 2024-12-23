import { IsNotEmpty } from "class-validator";

export class VacancyCreateDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  requirements: string;

  location?: string;

  @IsNotEmpty()
  salary: string;
}