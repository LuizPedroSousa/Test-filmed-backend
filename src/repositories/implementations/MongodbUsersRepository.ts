import { User } from "../../entities/User";
import { assignDefined } from "../../utils/assignDefined";
import { convertObjectStringToRegex } from "../../utils/convertObjectStringToRegexQuery";
import {
  FindManyDTO,
  UpdateUserByIdDTO,
  UserRepository,
} from "../UserRepository";
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

  async findByIdOrEmail(user_id: string, email: string): Promise<User | null> {
    const user = await UserModel.findOne({
      $or: [{ _id: user_id }, { email }],
    });
    return user;
  }

  async findMany(data: FindManyDTO): Promise<User[] | []> {
    const query = convertObjectStringToRegex("i", data);
    delete query.orderBy;

    let sort = -1;

    // order by ascending
    if (data.orderBy && /asc/i.test(data.orderBy)) {
      sort = 1;
    }

    const users = await UserModel.find(query).sort({ insertedAt: sort });

    return users;
  }

  async updateUserById(
    user_id: string,
    data: UpdateUserByIdDTO
  ): Promise<User | null> {
    const user = await UserModel.findOneAndUpdate({ _id: user_id }, data);
    return user;
  }

  async deleteUserById(user_id: string): Promise<void> {
    await UserModel.deleteOne({ _id: user_id });
  }
}
