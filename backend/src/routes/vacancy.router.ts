import express from "express";
import { VacancyController } from "../controllers/vacancy.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { vacancyService } from "../services";

const vacancy = express.Router();
const controller = new VacancyController(vacancyService);

vacancy.get('/:vacancyId', );
vacancy.post('', authenticate, controller.create.bind(controller));
vacancy.patch('', );
vacancy.delete('', );

export { vacancy }