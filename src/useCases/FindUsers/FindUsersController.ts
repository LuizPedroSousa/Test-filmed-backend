import { Request, Response } from "express";
import { assignDefined } from "../../utils/assignDefined";
import { FindUsersRequestQueryParamsDTO } from "./FindUsersDTO";
import { FindUsersUseCase } from "./FindUsersUseCase";
import { FindUsersView } from "./FindUsersView";

export class FindUsersController {
  constructor(
    private findUsersUseCase: FindUsersUseCase,
    private findUsersView: FindUsersView
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name, id, orderBy } = req.query;

    const data: FindUsersRequestQueryParamsDTO = assignDefined({
      name,
      email,
      id,
      orderBy,
    });

    const users = await this.findUsersUseCase.execute(data);

    const response = this.findUsersView.render(users);

    return res.status(200).json(response);
  }
}
