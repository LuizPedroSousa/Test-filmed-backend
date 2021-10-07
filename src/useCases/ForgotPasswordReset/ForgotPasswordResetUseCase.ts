import { User } from ".prisma/client";
import { CustomError } from "../../entities/CustomError";
import { HashRepository } from "../../repositories/HashRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { ForgotPasswordResetRequestDTO } from "./ForgotPasswordResetDTO";

export class ForgotPasswordResetUseCase {
  constructor(
    private usersRepository: UserRepository,
    private hashRepository: HashRepository
  ) {}

  async execute(
    data: ForgotPasswordResetRequestDTO,
    user: User
  ): Promise<User> {
    const newPassword = await this.hashRepository.generateSaltByPassword(
      data.password
    );

    const userUpdated = await this.usersRepository.updateUserById(user.id, {
      password: newPassword,
    });

    if (!userUpdated) {
      throw new CustomError({ message: "User not found" });
    }

    return userUpdated;
  }
}
