import { AuthService } from "../services/auth.service";
import { Request, Response } from 'express';
import { UserCreateDto } from "../dtos/user.create.dto";
import { AuthLoginDto } from "../dtos/auth.login.dto";

export class AuthController {
  constructor(private authService: AuthService) {}

  public async register ({body}: Request<UserCreateDto>, res: Response) {
    const token = await this.authService.registerUser(body);
    res.status(201).send({token});
  }

  public async login({body}: Request<AuthLoginDto>, res: Response) {
    const token = await this.authService.loginUser(body);
    res.status(200).send({token});
  }
}