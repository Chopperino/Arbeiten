import express, { Express } from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import { auth } from "./routes/auth.router";
import { user } from "./routes/user.router";
import { vacancy } from "./routes/vacancy.router";
import { complaint } from "./routes/complaint.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

app.use('/auth', auth);
app.use('/user', user);
app.use('/vacancy', vacancy);
app.use('/complaint', complaint);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});