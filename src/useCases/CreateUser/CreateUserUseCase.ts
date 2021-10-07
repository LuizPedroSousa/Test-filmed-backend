import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { CustomError } from "../../entities/CustomError";

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: CreateUserRequestDTO): Promise<User> {
    const userAlreadyExits = await this.usersRepository.findById(data.user_id);

    if (userAlreadyExits) {
      throw new CustomError({ message: "User already exists" });
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    return user;
  }
}
