import { ComplaintRepository } from "../repositories/complaint.repository";
import { ComplaintCreateDto } from "../dtos/complaint.create.dto";

export class ComplaintService {
  constructor(private complaintRepository: ComplaintRepository) {}

  public create(authorId: string, {description, userId, vacancyId}: ComplaintCreateDto) {
    const complaint = {description, authorId, userId, vacancyId};
    return this.complaintRepository.create(complaint);
  }
}