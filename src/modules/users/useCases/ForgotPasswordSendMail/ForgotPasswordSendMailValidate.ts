import { User } from ".prisma/client";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { HttpException } from "../../../../shared/exceptions/HttpException";
import { ForgotPasswordSendMailRequestDTO } from "../../dtos/forgotPasswordSendMailDTO";

@injectable()
export class ForgotPasswordSendMailValidate {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute(data: ForgotPasswordSendMailRequestDTO): Promise<User> {
    const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

    if (!userAlreadyExits) {
      throw new HttpException({ message: "User not found" });
    }

    return userAlreadyExits;
  }
}
