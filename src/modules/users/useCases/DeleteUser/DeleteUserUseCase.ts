import { HttpException } from "../../../../shared/exceptions/HttpException";
import { DeleteUserRequestParamsDTO } from "../../dtos/deleteUserDTO";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute(data: DeleteUserRequestParamsDTO) {
    const userAlreadyExits = await this.usersRepository.findById(data.user_id);

    if (!userAlreadyExits) {
      throw new HttpException({ message: "User not found" });
    }

    await this.usersRepository.deleteUserById(data.user_id);

    return userAlreadyExits;
  }
}
