import { CreateUserRequestDTO } from "../../dtos/createUserDTO";
import { HttpException } from "../../../../shared/exceptions/HttpException";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

@injectable()
export class CreateUserValidate {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute(data: CreateUserRequestDTO): Promise<void> {
    const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExits) {
      throw new HttpException({ message: "User already exists" });
    }
  }
}
