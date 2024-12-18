import { registerUser, loginUser } from "../services/auth.service";
import { Request, Response } from 'express';
import { UserCreateDto } from "../dtos/user.create.dto";
import { AuthLoginDto } from "../dtos/auth.login.dto";

export async function register ({body}: Request<UserCreateDto>, res: Response) {
  try {
    const token = await registerUser(body);
    res.status(200).send({token});
  } catch (error: any) {
    res.status(400).send({message: 'Registration failed', error: error.message})
  }
}

export async function login ({body}: Request<AuthLoginDto>, res: Response) {
  try {
    const token = await loginUser(body);
    res.status(200).send({token});
  } catch (error: any) {
    res.status(400).send({message: 'Login failed', error: error.message})
  }
}