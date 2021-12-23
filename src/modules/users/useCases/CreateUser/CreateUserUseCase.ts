import { CreateUserRequestDTO } from "../../dtos/createUserDTO";
import { UserEntity } from "../../infra/entities/User.entity";
import { User } from ".prisma/client";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}
  async execute(data: CreateUserRequestDTO): Promise<User> {
    const user = new UserEntity(data);

    await this.usersRepository.save(user);

    return user;
  }
}
