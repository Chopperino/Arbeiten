import { Request } from 'express';
import { TokenPayload } from "./TokenPayload";

export interface Params<P extends {}> extends Omit<Request, 'params'> {
  params: P;
}

export interface AuthRequest extends Omit<Request, 'body'> {
  body: {
    _user: TokenPayload;
  };
}