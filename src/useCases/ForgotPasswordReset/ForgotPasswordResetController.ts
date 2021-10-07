import { Response } from "express";
import { CustomRequest } from "../../entities/CustomRequest";
import { ForgotPasswordResetRequestDTO } from "./ForgotPasswordResetDTO";
import { ForgotPasswordResetUseCase } from "./ForgotPasswordResetUseCase";
import { ForgotPasswordResetValidate } from "./ForgotPasswordResetValidate";
export class ForgotPasswordResetController {
  constructor(
    private forgotPasswordResetUseCase: ForgotPasswordResetUseCase,
    private forgotPasswordResetValidate: ForgotPasswordResetValidate
  ) {}

  async handle(req: CustomRequest, res: Response) {
    const {
      body: { password },
      user,
    } = req;

    const data: ForgotPasswordResetRequestDTO = {
      user,
      password,
    };

    await this.forgotPasswordResetUseCase.execute(data);

    const userUpdated = await this.forgotPasswordResetValidate.execute(data);

    return res
      .status(200)
      .json({ message: "User updated with successfully", user: userUpdated });
  }
}
