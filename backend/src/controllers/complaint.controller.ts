import { ComplaintService } from "../services/complaint.service";
import { ComplaintCreateDto } from "../dtos/complaint.create.dto";
import { Request, RequestHandler, Response } from 'express'
import { ComplaintResponse } from "../responses/complaint.response";
import { AuthRequest } from "../types/Requests";

export class ComplaintController {
  constructor(private complaintService: ComplaintService) {}

  public create: RequestHandler = async (req: Request, res: Response<ComplaintResponse>) => {
    const {body} = req as AuthRequest & Request<ComplaintCreateDto>;
    const complaint = await this.complaintService.create(body);
    res.status(201).send(complaint);
  }
}