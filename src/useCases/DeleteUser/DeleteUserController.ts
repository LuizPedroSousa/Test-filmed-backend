import { Request, Response } from "express";
import { DeleteUserRequestParamsDTO } from "./DeleteUserDTO";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserValidate } from "./DeleteUserValidate";
import { DeleteUserView } from "./DeleteUserView";

export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase,
    private deleteUserValidate: DeleteUserValidate,
    private deleteUserView: DeleteUserView
  ) {}
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const data: DeleteUserRequestParamsDTO = {
      user_id,
    };

    await this.deleteUserValidate.execute(data);
    const user = await this.deleteUserUseCase.execute(data);

    const response = this.deleteUserView.render(user);

    return res.status(200).json(response);
  }
}
