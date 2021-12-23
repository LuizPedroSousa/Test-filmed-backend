import { User } from ".prisma/client";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { FindUsersRequestQueryParamsDTO } from "../../dtos/findUsersDTO";

@injectable()
export class FindUsersUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute(data: FindUsersRequestQueryParamsDTO): Promise<User[] | []> {
    const users = await this.usersRepository.findMany(data);

    return users;
  }
}
