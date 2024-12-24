import { ComplaintService } from "../services/complaint.service";
import { ComplaintCreateDto } from "../dtos/complaint.create.dto";
import { Request, RequestHandler, Response } from 'express'
import { ComplaintResponse } from "../responses/complaint.response";
import { AuthRequest } from "../types/Requests";
import { complaintMapper } from "../mappers/complaint.mapper";

export class ComplaintController {
  constructor(
    private complaintService: ComplaintService
  ) {}

  public create: RequestHandler = async (req: Request, res: Response<ComplaintResponse>) => {
    const {body} = req as AuthRequest & Request<ComplaintCreateDto>;

    const complaint = await this.complaintService.create(body._user.userId, body);
    res.status(201).send(complaintMapper(complaint));
  }

  public async delete(req: Request<{ complaintId: string }>, res: Response<ComplaintResponse>) {
    await this.complaintService.delete(req.params.complaintId);
    res.status(204).send();
  }
}