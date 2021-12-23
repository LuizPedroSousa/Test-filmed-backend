import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { AuthenticateUserResponseDTO } from "../../dtos/authenticateUserDTO";

@injectable()
export class AuthenticateUserView {
  render(user: User, token: string): AuthenticateUserResponseDTO {
    return {
      message: "User authenticated with successfully",
      user: new UserEntityResponse(user),
      token,
    };
  }
}
