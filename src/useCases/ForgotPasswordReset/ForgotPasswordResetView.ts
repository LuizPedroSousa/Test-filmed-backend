import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { ForgotPasswordResetResponseDTO } from "./ForgotPasswordResetDTO";

export class ForgotPasswordResetView {
  render(user: User): ForgotPasswordResetResponseDTO {
    return {
      message: "User password updated with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
