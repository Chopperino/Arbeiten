import express, { Express } from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import { auth } from "./routes/auth.router";
import { user } from "./routes/user.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

app.use('/auth', auth);
app.use('/user', user)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});