import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";
import { UserEntity } from "../../entities/UserEntity";
import { User } from ".prisma/client";

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: CreateUserRequestDTO): Promise<User> {
    const user = new UserEntity(data);

    await this.usersRepository.save(user);

    return user;
  }
}
