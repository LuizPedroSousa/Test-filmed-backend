import { User } from ".prisma/client";
import { HttpException } from "../../../../shared/exceptions/HttpException";
import { ForgotPasswordResetRequestDTO } from "../../dtos/forgotPasswordResetDTO";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { IHashProvider } from "@/shared/container/providers/HashProvider/models/IHashProvider";

@injectable()
export class ForgotPasswordResetUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute(
    data: ForgotPasswordResetRequestDTO,
    user: User
  ): Promise<User> {
    const newPassword = await this.hashProvider.generateSaltByPassword(
      data.password
    );

    const userUpdated = await this.usersRepository.updateUserById(user.id, {
      password: newPassword,
    });

    if (!userUpdated) {
      throw new HttpException({ message: "User not found" });
    }

    return userUpdated;
  }
}
