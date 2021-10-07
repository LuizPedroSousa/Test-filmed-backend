import { Request, Response } from "express";
import { ForgotPasswordSendMailRequestDTO } from "./ForgotPasswordSendMailDTO";
import { ForgotPasswordSendMailUseCase } from "./ForgotPasswordSendMailUseCase";
import { ForgotPasswordSendMailValidate } from "./ForgotPasswordSendMailValidate";

export class ForgotPasswordSendMailController {
  constructor(
    private forgotPasswordUseCase: ForgotPasswordSendMailUseCase,
    private forgotPasswordValidate: ForgotPasswordSendMailValidate
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const data: ForgotPasswordSendMailRequestDTO = {
      email,
    };

    const user = await this.forgotPasswordValidate.execute(data);

    await this.forgotPasswordUseCase.execute(user);

    return res.status(200).json({
      message: "Email sended to your account with successfully",
      user: { email },
    });
  }
}
