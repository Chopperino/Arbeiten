import { VacancyService } from "../services/vacancy.service";
import { VacancyCreateDto } from "../dtos/vacancy.create.dto";
import { Request, RequestHandler, Response } from 'express'
import { VacancyResponse } from "../responses/vacancy.response";
import { AuthRequest } from "../types/Requests";

export class VacancyController {
  constructor(
    private vacancyService: VacancyService,
  ) {}

  public create: RequestHandler = async (req: Request, res: Response<VacancyResponse>) => {
    const {body} = req as AuthRequest & Request<VacancyCreateDto>;

    const vacancy = await this.vacancyService.create(body._user.userId, body);
    res.status(201).send(vacancy);
  }
}