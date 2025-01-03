import {DbVacancy} from "../types/database/DbVacancy";
import {VacancyResponse} from "../responses/vacancy.response";

export function vacancyMapper(vacancy: DbVacancy): VacancyResponse {
  return {
    id: vacancy.id,
    name: vacancy.name,
    status: vacancy.status,
    description: vacancy.description,
    requirements: vacancy.requirements,
    location: vacancy.location ?? '',
    salary: vacancy.salary,
    authorId: vacancy.authorId,
    applicants: vacancy.applicants,
    createdAt: vacancy.createdAt,
    updatedAt: vacancy.updatedAt,
  }
}