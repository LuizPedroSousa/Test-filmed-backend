import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { CustomError } from "../../entities/CustomError";

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: CreateUserRequestDTO): Promise<User> {
    const user = new User(data);

    await this.usersRepository.save(user);

    return user;
  }
}
