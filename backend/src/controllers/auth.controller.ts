import { AuthService } from "../services/auth.service";
import { Request, Response } from 'express';
import { UserCreateDto } from "../dtos/user.create.dto";
import { AuthLoginDto } from "../dtos/auth.login.dto";

export class AuthController {
  constructor(private authService: AuthService) {}

  public async register ({body}: Request<UserCreateDto>, res: Response) {
    try {
      const token = await this.authService.registerUser(body);
      res.status(201).send({token});
    } catch (error: any) {
      res.status(400).send({message: 'Registration failed', error: error.message})
    }
  }

  public async login({body}: Request<AuthLoginDto>, res: Response) {
    try {
      const token = await this.authService.loginUser(body);
      res.status(200).send({token});
    } catch (error: any) {
      res.status(400).send({message: 'Login failed', error: error.message})
    }
  }
}