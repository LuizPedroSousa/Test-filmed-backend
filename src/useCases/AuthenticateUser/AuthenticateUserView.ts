import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { AuthenticateUserResponseDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserView {
  render(user: User, token: string): AuthenticateUserResponseDTO {
    return {
      message: "User authenticated with successfully",
      user: new UserEntityResponse(user),
      token,
    };
  }
}
