import { User } from ".prisma/client";
import { HttpException } from "../../../../shared/exceptions/HttpException";
import { FindUserRequestParamsDTO } from "../../dtos/findUserDTO";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

@injectable()
export class FindUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}
  async execute(data: FindUserRequestParamsDTO): Promise<User> {
    const user = await this.usersRepository.findById(data.user_id);

    if (!user) {
      throw new HttpException({ message: "User not found" });
    }

    return user;
  }
}
