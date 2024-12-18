import express from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { getMe } from "../controllers/user.controller";

const user = express.Router();

user.get('/getMe', authenticate, getMe)

export { user }