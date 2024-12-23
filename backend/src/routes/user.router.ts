import express from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { userService } from "../services";

const user = express.Router();
const controller = new UserController(userService)

user.get('/getMe', authenticate, controller.getMe.bind(controller))
user.get('/:userId', controller.getUser.bind(controller))

export { user }