import { DbComplaint } from "../types/database/DbComplaint";
import { ComplaintResponse } from "../responses/complaint.response";

export function complaintMapper(complaint: DbComplaint): ComplaintResponse {
  return {
    id: complaint.id,
    description: complaint.description,
    authorId: complaint.authorId,
    userId: complaint.userId ?? '',
    vacancyId: complaint.vacancyId ?? '',
  }
}