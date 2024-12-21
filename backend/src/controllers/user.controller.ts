import { getUserViaId } from "../services/user.service";
import { AuthRequest, Params } from "../types/Requests";
import { UserGetResponse } from "../responses/user.get.response";
import { Response } from 'express'
import { userGetMapper } from "../mappers/user.get.mapper";

export async function getMe({body}: AuthRequest, res: Response<UserGetResponse>) {
  const user = await getUserViaId(body._user.userId);
  res.status(200).send(userGetMapper(user));
}

export async function getUser(req: Params<{ userId }>, res: Response<UserGetResponse>) {
  const user = await getUserViaId(req.params.userId);
  res.status(200).send(userGetMapper(user));
}