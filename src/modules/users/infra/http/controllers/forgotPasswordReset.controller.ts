import { Request, Response } from "express";
import { container } from "tsyringe";
import { ForgotPasswordResetRequestDTO } from "../../../dtos/forgotPasswordResetDTO";
import { ForgotPasswordResetUseCase } from "../../../useCases/ForgotPasswordReset/ForgotPasswordResetUseCase";
import { ForgotPasswordResetView } from "../../../useCases/ForgotPasswordReset/ForgotPasswordResetView";
export class ForgotPasswordResetController {
  async handle(req: Request, res: Response) {
    const {
      body: { password },
      user,
    } = req as any;

    const data: ForgotPasswordResetRequestDTO = {
      password,
    };

    const forgotPasswordResetUseCase = container.resolve(
      ForgotPasswordResetUseCase
    );
    const forgotPasswordResetView = container.resolve(ForgotPasswordResetView);

    const userUpdated = await forgotPasswordResetUseCase.execute(data, user);

    const response = forgotPasswordResetView.render(userUpdated);

    return res.status(200).json(response);
  }
}
