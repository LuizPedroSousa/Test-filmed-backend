import { HttpException } from "../../exceptions/HttpException";
import { User } from ".prisma/client";
import { UserRepository } from "../../repositories/UserRepository";
import { AuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { TokenRepository } from "../../repositories/TokenRepository";
import { HashRepository } from "../../repositories/HashRepository";

interface AuthenticateUserUserCaseResolve {
  user: User;
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private tokenRepository: TokenRepository,
    private hashRepository: HashRepository
  ) {}
  async execute(
    data: AuthenticateUserRequestDTO
  ): Promise<AuthenticateUserUserCaseResolve> {
    const userAlreadyExits = await this.userRepository.findByEmail(data.email);

    if (!userAlreadyExits) {
      throw new HttpException({ message: "User or password are invalid" });
    }

    const passwordMatch = await this.hashRepository.compare(
      data.password,
      userAlreadyExits.password
    );

    if (!passwordMatch) {
      throw new HttpException({ message: "User or password are invalid" });
    }

    const token = this.tokenRepository.sign(
      { _id: userAlreadyExits.id },
      "10m"
    );

    return { user: userAlreadyExits, token };
  }
}
