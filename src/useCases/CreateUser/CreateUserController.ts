import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id, name, email, password } = req.body;

    const data = {
      user_id,
      name,
      email,
      password,
    };

    try {
      await this.createUserUseCase.execute(data);

      return res.status(201).json({});
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: error?.message || "Unexpected error" });
    }
  }
}
