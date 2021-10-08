import { Request, Response } from "express";
import { CustomError } from "../../entities/CustomError";
import { CustomRequest } from "../../entities/CustomRequest";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserValidate } from "./UpdateUserValidate";
import { UpdateUserView } from "./UpdateUserView";

export class UpdateUserController {
  constructor(
    private updateUserUseCase: UpdateUserUseCase,
    private updateUserValidate: UpdateUserValidate,
    private updateUserView: UpdateUserView
  ) {}

  async handle(req: CustomRequest, res: Response): Promise<Response> {
    const {
      body: { email, name },
      user,
    } = req;

    if (!email && !name) {
      throw new CustomError({ message: "Invalid data" });
    }

    const data: UpdateUserRequestDTO = {
      email: email || user.email,
      name: name || user.password,
    };

    await this.updateUserValidate.execute(data, user);
    const userUpdated = await this.updateUserUseCase.execute(data, user);

    const response = this.updateUserView.render(userUpdated);

    return res.status(200).json(response);
  }
}
