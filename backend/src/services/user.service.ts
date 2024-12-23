import { UserRepository } from "../repositories/user.repository";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  public getById(id: string) {
    return this.userRepository.findById(id);
  }
}