import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from "../repositories/user.repository";
import { DbUser } from "../types/database/DbUser";
import { UserCreateDto } from "../dtos/user.create.dto";
import { AuthLoginDto } from "../dtos/auth.login.dto";

export async function registerUser({email, password, username, role}: UserCreateDto) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({
    email,
    password: hashedPassword,
    username,
    role,
  });
  return generateToken(user);
}

export async function loginUser({email, password}: AuthLoginDto) {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }
  return generateToken(user);
}

function generateToken(user: DbUser) {
  return jwt.sign({userId: user.id, userRole: user.role}, process.env.SECRET || 'secret', {expiresIn: '24h'});
}