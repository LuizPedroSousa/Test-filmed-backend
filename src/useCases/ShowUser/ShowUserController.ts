import { Response } from "express";
import { CustomRequest } from "../../entities/CustomRequest";
import { ShowUserUseCase } from "./ShowUserUseCase";

export class ShowUserController {
  constructor(private showUserUseCase: ShowUserUseCase) {}
  async handle(req: CustomRequest, res: Response): Promise<Response> {
    const user = this.showUserUseCase.execute(req.user);

    return res.status(200).json({ user });
  }
}
