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

  async updateUserById(
    user_id: string,
    data: Omit<User, "_id" | "insertedAt" | "password" | "user_id">
  ): Promise<User | null> {
    const user = await UserModel.findOneAndUpdate({ _id: user_id }, data);
    return user;
  }

  async deleteUserById(user_id: string): Promise<void> {
    await UserModel.deleteOne({ _id: user_id });
  }
}
