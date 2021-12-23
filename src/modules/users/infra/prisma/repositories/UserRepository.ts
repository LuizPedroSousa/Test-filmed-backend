import { client } from "@/database/client";
import { convertObjectStringToRegex } from "@/utils/convertObjectStringToRegexQuery";
import { Prisma, User } from "@prisma/client";
import { injectable } from "tsyringe";
import {
  FindManyDTO,
  IUserRepository,
  UpdateUserByIdDTO,
} from "../../../repositories/IUserRepository";
import { UserEntity } from "../../entities/User.entity";

@injectable()
export class UserRepository implements IUserRepository {
  async save(user: UserEntity): Promise<void> {
    const { user_id, ...rest } = user;

    await client.user.create({ data: { ...rest } });
  }

  async findById(user_id: string): Promise<User | null> {
    const user = await client.user.findUnique({ where: { id: user_id } });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await client.user.findUnique({ where: { email } });
    return user;
  }

  async findByIdOrEmail(user_id: string, email: string): Promise<User | null> {
    const user = await client.user.findFirst({
      where: {
        OR: [{ id: user_id }, { email }],
      },
    });
    return user;
  }

  async findMany(data: FindManyDTO): Promise<User[] | []> {
    const query = convertObjectStringToRegex(data);
    delete query.orderBy;

    let orderBy: Prisma.SortOrder = "desc";

    if (data.orderBy && /asc/i.test(data?.orderBy)) {
      orderBy = "asc";
    }

    const users = await client.user.findMany({
      where: { ...query },
      orderBy: [{ insertedAt: orderBy }],
    });

    return users;
  }

  async updateUserById(
    user_id: string,
    data: UpdateUserByIdDTO
  ): Promise<User | null> {
    const user = await client.user.update({ where: { id: user_id }, data });
    return user;
  }

  async deleteUserById(user_id: string): Promise<void> {
    await client.user.delete({ where: { id: user_id } });
  }
}
