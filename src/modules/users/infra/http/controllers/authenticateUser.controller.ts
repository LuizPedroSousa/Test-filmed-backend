import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "../../../useCases/AuthenticateUser/AuthenticateUserUseCase";
import { AuthenticateUserView } from "../../../useCases/AuthenticateUser/AuthenticateUserView";

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const data = {
      email,
      password,
    };

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const authenticateUserView = container.resolve(AuthenticateUserView);

    const { user, token } = await authenticateUserUseCase.execute(data);

    const response = authenticateUserView.render(user, token);

    return res.status(200).json(response);
  }
}
