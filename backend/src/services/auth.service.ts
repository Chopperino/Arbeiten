import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from "../repositories/user.repository";
import { DbUser } from "../types/database/DbUser";
import { UserCreateDto } from "../dtos/user.create.dto";
import { AuthLoginDto } from "../dtos/auth.login.dto";


export class AuthService {
  constructor(private userRepository: UserRepository) {}

  public async registerUser({email, password, username, role}: UserCreateDto) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
      username,
      role,
    });
    return this.generateToken(user);
  }

  public async loginUser({email, password}: AuthLoginDto) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    return this.generateToken(user);
  }

  private generateToken(user: DbUser) {
    return jwt.sign({userId: user.id, userRole: user.role}, process.env.SECRET || 'secret', {expiresIn: '24h'});
  }
}

