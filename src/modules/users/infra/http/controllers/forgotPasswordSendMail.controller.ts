import { Request, Response } from "express";
import { container } from "tsyringe";
import { ForgotPasswordSendMailRequestDTO } from "../../../dtos/forgotPasswordSendMailDTO";
import { ForgotPasswordSendMailUseCase } from "../../../useCases/ForgotPasswordSendMail/ForgotPasswordSendMailUseCase";
import { ForgotPasswordSendMailValidate } from "../../../useCases/ForgotPasswordSendMail/ForgotPasswordSendMailValidate";
import { ForgotPasswordSendMailView } from "../../../useCases/ForgotPasswordSendMail/ForgotPasswordSendMailView";

export class ForgotPasswordSendMailController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const data: ForgotPasswordSendMailRequestDTO = {
      email,
    };

    const forgotPasswordSendMailValidate = container.resolve(
      ForgotPasswordSendMailValidate
    );
    const forgotPasswordSendMailUseCase = container.resolve(
      ForgotPasswordSendMailUseCase
    );
    const forgotPasswordSendMailView = container.resolve(
      ForgotPasswordSendMailView
    );

    const user = await forgotPasswordSendMailValidate.execute(data);

    await forgotPasswordSendMailUseCase.execute(user);

    const response = forgotPasswordSendMailView.render(email);

    return res.status(200).json(response);
  }
}
