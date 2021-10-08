import { Request, Response } from "express";
import { FindUserRequestParamsDTO } from "./FindUserDTO";
import { FindUserUseCase } from "./FindUserUseCase";
import { FindUserValidate } from "./FindUserValidate";
import { FindUserView } from "./FindUserView";

export class FindUserController {
  constructor(
    private findUserUseCase: FindUserUseCase,
    private findUserValidate: FindUserValidate,
    private findUserView: FindUserView
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    const data: FindUserRequestParamsDTO = { user_id };

    this.findUserValidate.execute(data);
    const user = await this.findUserUseCase.execute(data);

    const response = this.findUserView.render(user);

    return res.status(200).json(response);
  }
}
