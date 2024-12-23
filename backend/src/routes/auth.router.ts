import express from "express";
import { AuthController } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authService } from '../services';

const auth = express.Router();
const controller = new AuthController(authService);

auth.post('/register', controller.register.bind(controller))
auth.post('/login', controller.login.bind(controller))

export { auth }