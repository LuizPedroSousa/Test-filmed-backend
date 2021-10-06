import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidate } from "./CreateUserValidate";
export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private createUserValidate: CreateUserValidate
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id, name, email, password } = req.body;

    const data = {
      user_id,
      name,
      email,
      password,
    };

    try {
      await this.createUserValidate.execute(data);
      const user = await this.createUserUseCase.execute(data);

      return res.status(201).json({ user });
    } catch (error: any) {
      const response: any = {
        message: error?.message || "Unexpected error",
      };

      if (error.fields) {
        response.fields = error.fields;
      }

      return res.status(400).json(response);
    }
  }
}
