import { Request, Response } from "express";
import { FindUserRequestParamsDTO } from "./FindUserDTO";
import { FindUserUseCase } from "./FindUserUseCase";
import { FindUserValidate } from "./FindUserValidate";

export class FindUserController {
  constructor(
    private findUserUseCase: FindUserUseCase,
    private findUserValidate: FindUserValidate
  ) {}

  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const data: FindUserRequestParamsDTO = { user_id };

    this.findUserValidate.execute(data);
    const user = await this.findUserUseCase.execute(data);

    return res.status(200).json({ user });
  }
}
