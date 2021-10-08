import { Response } from "express";
import { CustomRequest } from "../../entities/CustomRequest";
import { ForgotPasswordResetRequestDTO } from "./ForgotPasswordResetDTO";
import { ForgotPasswordResetUseCase } from "./ForgotPasswordResetUseCase";
import { ForgotPasswordResetValidate } from "./ForgotPasswordResetValidate";
import { ForgotPasswordResetView } from "./ForgotPasswordResetView";
export class ForgotPasswordResetController {
  constructor(
    private forgotPasswordResetUseCase: ForgotPasswordResetUseCase,
    private forgotPasswordResetValidate: ForgotPasswordResetValidate,
    private forgotPasswordResetView: ForgotPasswordResetView
  ) {}

  async handle(req: CustomRequest, res: Response) {
    const {
      body: { password },
      user,
    } = req;

    const data: ForgotPasswordResetRequestDTO = {
      password,
    };

    await this.forgotPasswordResetValidate.execute(data);

    const userUpdated = await this.forgotPasswordResetUseCase.execute(
      data,
      user
    );

    const response = this.forgotPasswordResetView.render(userUpdated);

    return res.status(200).json(response);
  }
}
