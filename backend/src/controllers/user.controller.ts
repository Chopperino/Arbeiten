import { UserService } from "../services/user.service";
import { AuthRequest, Params } from "../types/Requests";
import { UserGetResponse } from "../responses/user.get.response";
import { Response } from 'express'
import { userGetMapper } from "../mappers/user.get.mapper";

export class UserController {
  constructor(private userService: UserService) {}

  public async getMe({body}: AuthRequest, res: Response<UserGetResponse>) {
    const user = await this.userService.getById(body._user.userId);
    res.status(200).send(userGetMapper(user));
  }

  public async getUser(req: Params<{ userId }>, res: Response<UserGetResponse>) {
    const user = await this.userService.getById(req.params.userId);
    res.status(200).send(userGetMapper(user));
  }
}