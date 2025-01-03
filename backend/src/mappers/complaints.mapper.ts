
import {ComplaintResponse} from "../responses/complaint.response";
import {complaintMapper} from "./complaint.mapper";
import {DbComplaint} from "../types/database/DbComplaint";

export function complaintsMapper(complaints: DbComplaint[]): ComplaintResponse[] {
  return complaints.map(complaintMapper);
}