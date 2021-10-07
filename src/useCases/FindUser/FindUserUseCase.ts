import { CustomError } from "../../entities/CustomError";
import { UserRepository } from "../../repositories/UserRepository";
import { FindUserRequestParamsDTO } from "./FindUserDTO";

export class FindUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: FindUserRequestParamsDTO) {
    const user = await this.usersRepository.findById(data.user_id);

    if (!user) {
      throw new CustomError({ message: "User not found" });
    }

    return user;
  }
}
