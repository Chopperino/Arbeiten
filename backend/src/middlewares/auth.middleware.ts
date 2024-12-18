import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { plainToInstance } from "class-transformer";
import { TokenPayload } from "../types/TokenPayload";
import { validateSync } from "class-validator";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    res.status(401).json({message: "No token provided"});
    return
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET || 'secret');

    const payload = plainToInstance(TokenPayload, decoded);

    const errors = validateSync(payload);
    if(errors.length > 0) {
      res.status(401).json({message: "Invalid token payload"});
      return
    }

    req.body._user = payload;

    next();
  } catch (error) {
    res.status(401).json({message: "Invalid token"});
  }
}