import express from "express";
import { VacancyController } from "../controllers/vacancy.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { vacancyService } from "../services";

const vacancy = express.Router();
const controller = new VacancyController(vacancyService);

vacancy.get('/:vacancyId', controller.getVacancy.bind(controller));
vacancy.get('/complaints/:vacancyId', authenticate, controller.getAllComplaints.bind(controller));
vacancy.post('', authenticate, controller.create.bind(controller));
vacancy.patch('/:vacancyId', authenticate, controller.update.bind(controller));
vacancy.delete('/:vacancyId', authenticate, controller.delete.bind(controller));

export { vacancy }