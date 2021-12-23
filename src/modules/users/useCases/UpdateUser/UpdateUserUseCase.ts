import { User } from ".prisma/client";
import { HttpException } from "../../../../shared/exceptions/HttpException";
import { UpdateUserRequestDTO } from "../../dtos/updaterUserDTO";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute(data: UpdateUserRequestDTO, user: User): Promise<User> {
    const userUpdated = await this.usersRepository.updateUserById(user.id, {
      ...data,
    });

    if (!userUpdated) {
      throw new HttpException({ message: "User not found" });
    }

    return userUpdated;
  }
}
