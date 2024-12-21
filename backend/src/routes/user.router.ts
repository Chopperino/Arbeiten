import express from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { getMe, getUser } from "../controllers/user.controller";

const user = express.Router();

user.get('/getMe', authenticate, getMe)
user.get('/:userId', getUser)

export { user }