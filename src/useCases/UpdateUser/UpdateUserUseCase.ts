import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: UpdateUserRequestDTO) {
    await this.usersRepository.updateUserById(data.user_id, {
      ...data,
    });

    return data;
  }
}
