import { User } from "../entities/User";
export interface UserRepository {
  findById(user_id: string): Promise<User>;
  save(user: User): Promise<void>;
}
