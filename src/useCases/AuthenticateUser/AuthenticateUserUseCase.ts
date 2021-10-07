import { CustomError } from "../../entities/CustomError";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

interface AuthenticateUserUserCaseResolve {
  user: User;
  token: string;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(
    data: AuthenticateUserDTO
  ): Promise<AuthenticateUserUserCaseResolve> {
    const userAlreadyExits = await this.userRepository.findByEmail(data.email);

    if (!userAlreadyExits) {
      throw new CustomError("User or password are invalid");
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      userAlreadyExits.password
    );

    if (!passwordMatch) {
      throw new CustomError("User or password are invalid");
    }

    const token = sign({}, process.env.SECRET_KEY as string, {
      subject: userAlreadyExits._id,
      expiresIn: "20s",
    });

    return { user: userAlreadyExits, token };
  }
}
