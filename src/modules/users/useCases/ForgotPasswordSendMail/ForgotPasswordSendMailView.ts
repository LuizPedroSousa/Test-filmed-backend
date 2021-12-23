import { injectable } from "tsyringe";
import { ForgotPasswordSendMailResponseDTO } from "../../dtos/forgotPasswordSendMailDTO";

@injectable()
export class ForgotPasswordSendMailView {
  render(email: string): ForgotPasswordSendMailResponseDTO {
    return {
      message: "Email sended to your account with successfully",
      user: {
        email,
      },
    };
  }
}
