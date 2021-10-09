import { User } from ".prisma/client";
import { HttpException } from "../../exceptions/HttpException";
import { UserRepository } from "../../repositories/UserRepository";
import { FindUserRequestParamsDTO } from "./FindUserDTO";

export class FindUserUseCase {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: FindUserRequestParamsDTO): Promise<User> {
    const user = await this.usersRepository.findById(data.user_id);

    if (!user) {
      throw new HttpException({ message: "User not found" });
    }

    return user;
  }
}
