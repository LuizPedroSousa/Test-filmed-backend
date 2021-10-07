import { Request, Response } from "express";
import { DeleteUserRequestParamsDTO } from "./DeleteUserDTO";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserValidate } from "./DeleteUserValidate";

export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase,
    private deleteUserValidate: DeleteUserValidate
  ) {}
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const data: DeleteUserRequestParamsDTO = {
      user_id,
    };

    await this.deleteUserValidate.execute(data);
    const user = await this.deleteUserUseCase.execute(data);

    return res
      .status(200)
      .json({ message: "User deleted with successfully", user });
  }
}
