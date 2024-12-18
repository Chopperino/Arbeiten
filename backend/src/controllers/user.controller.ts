import { getUser } from "../services/user.service";
import { AuthRequest } from "../types/Requests";
import { UserGetResponse } from "../responses/user.get.response";
import { Response } from 'express'
import { userGetMapper } from "../mappers/user.get.mapper";

export async function getMe({body}: AuthRequest, res: Response<UserGetResponse>) {
  const user = await getUser(body._user.userId);
  res.status(200).send(userGetMapper(user));
}