import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUser } from "../repositories/user.repository";
import { UserRole } from "@prisma/client";
import { DbUser } from "../../types/database/DbUser";

export async function registerUser(email: string, username: string, password: string, role: UserRole) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(email, username, hashedPassword, role);
  return generateToken(user);
}

export async function loginUser(email: string, password: string) {
  const user = await findUser(email);
  if(!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid credentials');
  }
  return generateToken(user);
}

function generateToken(user: DbUser) {
  return jwt.sign({id: user.id}, process.env.SECRET || 'secret', {expiresIn: '24h'});
}