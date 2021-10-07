import { User } from "../entities/User";

export interface UserRepository {
  findById(user_id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
