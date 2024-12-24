import { VacancyRepository } from "../repositories/vacancy.repository";
import { VacancyCreateDto } from "../dtos/vacancy.create.dto";
import {VacancyUpdateDto} from "../dtos/vacancy.update.dto";

export class VacancyService {
  constructor(
    private vacancyRepository: VacancyRepository,
  ) {}
  public create(authorId: string, {name, description, requirements, location, salary}: VacancyCreateDto) {
    const vacancy = {name, description, requirements, location, salary, authorId};
    return this.vacancyRepository.create(vacancy);
  }

  public update(vacancyId: string, authorId: string,
                {name, status, description, requirements, location, salary} : VacancyUpdateDto) {
    const vacancy =
      {name, status, description, authorId, requirements, location, salary, updatedAt: new Date().toISOString()};
    return this.vacancyRepository.update(vacancyId, vacancy);
  }

  public getById = (id: string) => this.vacancyRepository.findById(id);

  public delete = (id: string) => this.vacancyRepository.delete(id);
}