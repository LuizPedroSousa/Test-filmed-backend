import { Request, Response } from "express";
import { ForgotPasswordSendMailRequestDTO } from "./ForgotPasswordSendMailDTO";
import { ForgotPasswordSendMailUseCase } from "./ForgotPasswordSendMailUseCase";
import { ForgotPasswordSendMailValidate } from "./ForgotPasswordSendMailValidate";
import { ForgotPasswordSendMailView } from "./ForgotPasswordSendMailView";

export class ForgotPasswordSendMailController {
  constructor(
    private forgotPasswordUseCase: ForgotPasswordSendMailUseCase,
    private forgotPasswordValidate: ForgotPasswordSendMailValidate,
    private forgotPasswordSendMailView: ForgotPasswordSendMailView
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const data: ForgotPasswordSendMailRequestDTO = {
      email,
    };

    const user = await this.forgotPasswordValidate.execute(data);

    await this.forgotPasswordUseCase.execute(user);

    const response = this.forgotPasswordSendMailView.render(email);

    return res.status(200).json(response);
  }
}
