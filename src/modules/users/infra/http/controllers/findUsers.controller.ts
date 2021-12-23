import { Request, Response } from "express";
import { container } from "tsyringe";
import { assignDefined } from "../../../../../utils/assignDefined";
import { FindUsersRequestQueryParamsDTO } from "../../../dtos/findUsersDTO";
import { FindUsersUseCase } from "../../../useCases/FindUsers/FindUsersUseCase";
import { FindUsersView } from "../../../useCases/FindUsers/FindUsersView";

export class FindUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name, id, orderBy } = req.query;

    const data: FindUsersRequestQueryParamsDTO = assignDefined({
      name,
      email,
      id,
      orderBy,
    });

    const findUsersUseCase = container.resolve(FindUsersUseCase);

    const users = await findUsersUseCase.execute(data);

    const findUsersView = container.resolve(FindUsersView);

    const response = findUsersView.render(users);

    return res.status(200).json(response);
  }
}
