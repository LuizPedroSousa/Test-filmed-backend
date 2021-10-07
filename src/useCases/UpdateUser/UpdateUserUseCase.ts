import { User } from ".prisma/client";
import { UserRepository } from "../../repositories/UserRepository";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: UpdateUserRequestDTO, user: User) {
    await this.usersRepository.updateUserById(user.id, {
      ...data,
    });

    return data;
  }
}
