import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";
import { UserModel } from "./MongooseModels/UserModel";

export class MongodbUsersRepository implements UserRepository {
  async save(user: User): Promise<void> {
    await new UserModel(user).save();
  }

  async findById(user_id: string): Promise<User | null> {
    const user = await UserModel.findOne({ _id: user_id });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    return user;
  }
}
