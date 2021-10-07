import { CustomError } from "../../entities/CustomError";
import { UserRepository } from "../../repositories/UserRepository";
import { DeleteUserRequestParamsDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: DeleteUserRequestParamsDTO) {
    const userAlreadyExits = await this.usersRepository.findById(data.user_id);

    if (!userAlreadyExits) {
      throw new CustomError({ message: "User not found" });
    }

    await this.usersRepository.deleteUserById(data.user_id);

    return userAlreadyExits;
  }
}
