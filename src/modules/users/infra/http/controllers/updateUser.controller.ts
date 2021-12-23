import { Request, Response } from "express";
import { container } from "tsyringe";
import { HttpException } from "../../../../../shared/exceptions/HttpException";
import { UpdateUserRequestDTO } from "../../../dtos/updaterUserDTO";
import { UpdateUserUseCase } from "../../../useCases/UpdateUser/UpdateUserUseCase";
import { UpdateUserValidate } from "../../../useCases/UpdateUser/UpdateUserValidate";
import { UpdateUserView } from "../../../useCases/UpdateUser/UpdateUserView";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      body: { email, name },
      user,
    } = req;

    if (!email && !name) {
      throw new HttpException({ message: "Invalid data" });
    }

    const data: UpdateUserRequestDTO = {
      email: email || user.email,
      name: name || user.password,
    };

    const updateUserValidate = container.resolve(UpdateUserValidate);
    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updateUserView = container.resolve(UpdateUserView);

    await updateUserValidate.execute(data, user);
    const userUpdated = await updateUserUseCase.execute(data, user);

    const response = updateUserView.render(userUpdated);

    return res.status(200).json(response);
  }
}
