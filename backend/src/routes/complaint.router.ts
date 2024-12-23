import express from "express";
import { ComplaintController } from "../controllers/complaint.controller";
import { complaintService } from "../services";
import { authenticate } from "../middlewares/auth.middleware";

const complaint = express.Router();
const controller = new ComplaintController(complaintService);

complaint.post('', authenticate, controller.create.bind(controller));

export { complaint }