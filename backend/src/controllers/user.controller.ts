import { UserService } from "../services/user.service";
import { AuthRequest, Params } from "../types/Requests";
import { UserResponse } from "../responses/user.response";
import { Response } from 'express'
import { userMapper } from "../mappers/user.mapper";

export class UserController {
  constructor(private userService: UserService) {}

  public async getMe({body}: AuthRequest, res: Response<UserResponse>) {
    const user = await this.userService.getById(body._user.userId);
    res.status(200).send(userMapper(user));
  }

  public async getUser(req: Params<{ userId }>, res: Response<UserResponse>) {
    const user = await this.userService.getById(req.params.userId);
    res.status(200).send(userMapper(user));
  }
}