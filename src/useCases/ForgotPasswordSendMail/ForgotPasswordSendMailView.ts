import { ForgotPasswordSendMailResponseDTO } from "./ForgotPasswordSendMailDTO";

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
