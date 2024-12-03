import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if(!req.headers.authorization) {
    res.status(401).json({message: "No token provided"});
    return
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET || 'secret');
    if(typeof decoded !== "string" && "id" in decoded) {
      res.locals.user = (decoded as JwtPayload).id;
      next();
    } else {
      res.status(401).json({message: "Invalid token"});
    }
  } catch (error) {
    res.status(401).json({message: "Invalid token"});
  }
}