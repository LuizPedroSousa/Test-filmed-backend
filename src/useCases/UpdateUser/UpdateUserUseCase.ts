import { User } from ".prisma/client";
import { HttpException } from "../../exceptions/HttpException";
import { UserRepository } from "../../repositories/UserRepository";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: UserRepository) {}

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
