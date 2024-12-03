import express from "express";
import { register, login } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";

const auth = express.Router();

auth.post('/register', register)
auth.post('/login', login)

export { auth }