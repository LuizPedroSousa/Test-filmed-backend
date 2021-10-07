import { CustomError } from "../../entities/CustomError";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { ForgotPasswordResetRequestDTO } from "./ForgotPasswordResetDTO";

export class ForgotPasswordResetUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: ForgotPasswordResetRequestDTO): Promise<User> {
    const user = await this.usersRepository.updateUserById(data.user._id, {
      password: data.password,
    });

    if (!user) {
      throw new CustomError({ message: "User not found" });
    }

    return user;
  }
}
