import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidate } from "./CreateUserValidate";
import { CreateUserView } from "./CreateUserView";
export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private createUserValidate: CreateUserValidate,
    private createUserView: CreateUserView
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id, name, email, password } = req.body;

    const data = {
      user_id,
      name,
      email,
      password,
    };

    await this.createUserValidate.execute(data);

    const user = await this.createUserUseCase.execute(data);

    const response = this.createUserView.render(user);

    return res.status(201).json(response);
  }
}
