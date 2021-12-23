import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserRequestParamsDTO } from "../../../dtos/findUserDTO";
import { FindUserUseCase } from "../../../useCases/FindUser/FindUserUseCase";
import { FindUserView } from "../../../useCases/FindUser/FindUserView";

export class FindUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    const data: FindUserRequestParamsDTO = { user_id };

    const findUserUseCase = container.resolve(FindUserUseCase);
    const findUserView = container.resolve(FindUserView);

    const user = await findUserUseCase.execute(data);

    const response = findUserView.render(user);

    return res.status(200).json(response);
  }
}
