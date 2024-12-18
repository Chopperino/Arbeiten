import { DbUser } from "../types/database/DbUser";
import { UserGetResponse } from "../responses/user.get.response";

export function userGetMapper(user: DbUser): UserGetResponse {
  return {
    email: user.email,
    username: user.username,
    name: user.name ?? '',
    bio: user.bio ?? '',
    role: user.role,
    createdAt: user.createdAt,
  }
}

