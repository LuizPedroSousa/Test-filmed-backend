import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";

export class MongodbUsersRepository implements UserRepository {
  async save(user: User): Promise<void> {}

  async findById(user_id: string): Promise<User> {}
}
