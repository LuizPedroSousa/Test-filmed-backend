import { User } from "../entities/User";

export interface UserRepository {
  findById(user_id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
  updateUserById(
    user_id: string,
    data: Omit<User, "_id" | "insertedAt" | "password" | "user_id">
  ): Promise<User | null>;
  deleteUserById(user_id: string): Promise<void>;
}
