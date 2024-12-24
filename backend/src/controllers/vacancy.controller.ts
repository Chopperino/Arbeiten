import { VacancyService } from "../services/vacancy.service";
import { VacancyCreateDto } from "../dtos/vacancy.create.dto";
import { Request, Response } from 'express'
import { VacancyResponse } from "../responses/vacancy.response";
import {AuthRequest, Params} from "../types/Requests";
import {VacancyUpdateDto} from "../dtos/vacancy.update.dto";
import {vacancyMapper} from "../mappers/vacancy.mapper";

export class VacancyController {
  constructor(
    private vacancyService: VacancyService,
  ) {}

  public create = async (req: Request, res: Response<VacancyResponse>) => {
    const {body} = req as AuthRequest & Request<VacancyCreateDto>;

    const vacancy = await this.vacancyService.create(body._user.userId, body);
    res.status(200).send(vacancy);
  }

  public update = async (req: Request, res: Response<VacancyResponse>) => {
    const {body} = req as AuthRequest & Request<VacancyUpdateDto> & Params<{ vacancyId: string }>;

    const vacancy = await this.vacancyService.update(req.params.vacancyId, body._user.userId, body);
    res.status(200).send(vacancy);
  }

  public async getVacancy(req: Params<{ vacancyId }>, res: Response<VacancyResponse>) {
    const vacancy = await this.vacancyService.getById(req.params.vacancyId);
    res.status(200).send(vacancyMapper(vacancy));
  }

  public async delete(req: Request<{ vacancyId: string }>, res: Response<VacancyResponse>) {
    await this.vacancyService.delete(req.params.vacancyId);
    res.status(204).send();
  }
}