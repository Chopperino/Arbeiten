import { VacancyRepository } from "../repositories/vacancy.repository";
import { VacancyCreateDto } from "../dtos/vacancy.create.dto";

export class VacancyService {
  constructor(
    private vacancyRepository: VacancyRepository,
  ) {}
  public create(authorId: string, {name, description, requirements, location, salary}: VacancyCreateDto) {
    const vacancy = {name, description, requirements, location, salary, authorId}
    return this.vacancyRepository.create(vacancy);
  }
}