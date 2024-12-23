import { VacancyRepository } from "../repositories/vacancy.repository";
import { UserRepository } from "../repositories/user.repository";
import { ComplaintRepository } from "../repositories/complaint.repository";
import { PrismaClient } from "@prisma/client";
import { VacancyService } from "./vacancy.service";
import { UserService } from "./user.service";
import { ComplaintService } from "./complaint.service";
import {AuthService} from "./auth.service";


const prisma = new PrismaClient();

const vacancyRepository = new VacancyRepository(prisma);
const userRepository = new UserRepository(prisma);
const complaintRepository = new ComplaintRepository(prisma);


export const vacancyService = new VacancyService(vacancyRepository);
export const userService = new UserService(userRepository);
export const complaintService = new ComplaintService(complaintRepository);
export const authService = new AuthService(userRepository);