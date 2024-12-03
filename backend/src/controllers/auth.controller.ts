import { registerUser, loginUser } from "../services/auth.service";
import { Request, Response } from 'express';

export async function register (req: Request, res: Response) {
  const {email, username, password, role} = req.body;
  try {
    const token = await registerUser(email, username, password, role);
    res.status(200).send({token});
  } catch (error: any) {
    res.status(400).send({message: 'Registration failed', error: error.message})
  }
}

export async function login (req: Request, res: Response) {
  const {email, password} = req.body;
  try {
    const token = await loginUser(email, password);
    res.status(200).send({token});
  } catch (error: any) {
    res.status(400).send({message: 'Login failed', error: error.message})
  }
}
