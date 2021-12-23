import { User } from ".prisma/client";
import { HttpException } from "../../../../shared/exceptions/HttpException";
import { UpdateUserRequestDTO } from "../../dtos/updaterUserDTO";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

@injectable()
export class UpdateUserValidate {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}
  async execute(data: UpdateUserRequestDTO, user: User) {
    if (data.email !== user.email) {
      const emailAlreadyExists = await this.usersRepository.findByEmail(
        data.email
      );

      if (emailAlreadyExists) {
        throw new HttpException({ message: "This email is unavailable" });
      }
    }
  }
}
