import { findUserById } from "../repositories/user.repository";

export async function getUser(id: string) {
  return findUserById(id);
}