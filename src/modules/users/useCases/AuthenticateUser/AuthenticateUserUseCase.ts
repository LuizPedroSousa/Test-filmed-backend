import { HttpException } from "../../../../shared/exceptions/HttpException";
import { User } from ".prisma/client";
import { AuthenticateUserRequestDTO } from "../../dtos/authenticateUserDTO";
import { UserRepository } from "@modules/users/infra/prisma/repositories/UserRepository";
import { ITokenProvider } from "@/shared/container/providers/TokenProvider/models/ITokenProvider";
import { IHashProvider } from "@/shared/container/providers/HashProvider/models/IHashProvider";
import { inject, injectable } from "tsyringe";

interface AuthenticateUserUserCaseResolve {
  user: User;
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository,
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}
  async execute(
    data: AuthenticateUserRequestDTO
  ): Promise<AuthenticateUserUserCaseResolve> {
    const userAlreadyExits = await this.userRepository.findByEmail(data.email);

    if (!userAlreadyExits) {
      throw new HttpException({ message: "User or password are invalid" });
    }

    const passwordMatch = await this.hashProvider.compare(
      data.password,
      userAlreadyExits.password
    );

    if (!passwordMatch) {
      throw new HttpException({ message: "User or password are invalid" });
    }

    const token = this.tokenProvider.sign({ _id: userAlreadyExits.id }, "10m");

    return { user: userAlreadyExits, token };
  }
}
