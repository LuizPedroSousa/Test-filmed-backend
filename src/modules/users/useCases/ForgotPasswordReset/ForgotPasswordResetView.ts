import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { ForgotPasswordResetResponseDTO } from "../../dtos/forgotPasswordResetDTO";

@injectable()
export class ForgotPasswordResetView {
  render(user: User): ForgotPasswordResetResponseDTO {
    return {
      message: "User password updated with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
