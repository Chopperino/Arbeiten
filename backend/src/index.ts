import express, { Express } from "express";
import dotenv from "dotenv";
import { auth } from "./routes/auth.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/auth', auth);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});