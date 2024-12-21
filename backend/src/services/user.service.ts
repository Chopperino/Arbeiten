import { findUserById } from "../repositories/user.repository";

export async function getUserViaId(id: string) {
  return findUserById(id);
}