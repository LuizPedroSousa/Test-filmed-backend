import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserValidate } from "./AuthenticateUserValidate";

export class AuthenticateUserController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase,
    private authenticateUserValidate: AuthenticateUserValidate
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const data = {
      email,
      password,
    };

    await this.authenticateUserValidate.execute(data);
    const { user, token } = await this.authenticateUserUseCase.execute(data);

    return res.status(200).json({ user, token });
  }
}
