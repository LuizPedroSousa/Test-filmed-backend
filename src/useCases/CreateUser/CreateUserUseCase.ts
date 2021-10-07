import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: CreateUserRequestDTO): Promise<User> {
    const user = new User(data);

    const userAlreadyExits = await this.usersRepository.findById(data.user_id);

    if (userAlreadyExits) {
      throw new Error("User already exists");
    }

    await this.usersRepository.save(user);

    return user;
  }
}
