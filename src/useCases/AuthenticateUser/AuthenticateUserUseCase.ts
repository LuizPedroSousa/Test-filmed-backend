import { CustomError } from "../../entities/CustomError";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { AuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { TokenRepository } from "../../repositories/TokenRepository";

interface AuthenticateUserUserCaseResolve {
  user: User;
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private tokenRepository: TokenRepository
  ) {}
  async execute(
    data: AuthenticateUserRequestDTO
  ): Promise<AuthenticateUserUserCaseResolve> {
    const userAlreadyExits = await this.userRepository.findByEmail(data.email);

    if (!userAlreadyExits) {
      throw new CustomError({ message: "User or password are invalid" });
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      userAlreadyExits.password
    );

    if (!passwordMatch) {
      throw new CustomError({ message: "User or password are invalid" });
    }

    const token = await this.tokenRepository.sign(
      { _id: userAlreadyExits._id },
      "20s"
    );

    return { user: userAlreadyExits, token };
  }
}
