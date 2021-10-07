import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { FindUsersRequestQueryParamsDTO } from "./FindUsersDTO";

export class FindUsersUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: FindUsersRequestQueryParamsDTO): Promise<User[] | []> {
    const users = await this.usersRepository.findMany(data);

    return users;
  }
}
