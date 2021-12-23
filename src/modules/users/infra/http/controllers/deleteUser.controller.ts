import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserRequestParamsDTO } from "../../../dtos/deleteUserDTO";
import { DeleteUserUseCase } from "../../../useCases/DeleteUser/DeleteUserUseCase";
import { DeleteUserView } from "../../../useCases/DeleteUser/DeleteUserView";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const data: DeleteUserRequestParamsDTO = {
      user_id,
    };

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const deleteUserView = container.resolve(DeleteUserView);

    const user = await deleteUserUseCase.execute(data);

    const response = deleteUserView.render(user);

    return res.status(200).json(response);
  }
}
