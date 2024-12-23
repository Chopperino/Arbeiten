import { DbUser } from "../types/database/DbUser";
import { UserResponse } from "../responses/user.response";

export function userMapper(user: DbUser): UserResponse {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    name: user.name ?? '',
    bio: user.bio ?? '',
    role: user.role,
    createdAt: user.createdAt,
  }
}

