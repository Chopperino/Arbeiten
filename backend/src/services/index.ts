import { VacancyRepository } from "../repositories/vacancy.repository";
import { PrismaClient } from "@prisma/client";
import { VacancyService } from "./vacancy.service";

const prisma = new PrismaClient();

const vacancyRepository = new VacancyRepository(prisma);

export const vacancyService = new VacancyService(vacancyRepository);
