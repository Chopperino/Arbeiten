import { Request } from 'express';
import { TokenPayload } from "./TokenPayload";
export interface AuthRequest extends Omit<Request, 'body'> {
  body: {
    _user: TokenPayload;
  };
}