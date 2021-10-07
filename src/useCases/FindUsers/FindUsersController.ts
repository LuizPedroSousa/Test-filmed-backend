import { Request, Response } from "express";
import { assignDefined } from "../../utils/assignDefined";
import { FindUsersRequestQueryParamsDTO } from "./FindUsersDTO";
import { FindUsersUseCase } from "./FindUsersUseCase";

export class FindUsersController {
  constructor(private findUsersUseCase: FindUsersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name, user_id, orderBy } = req.query;

    const data: FindUsersRequestQueryParamsDTO = assignDefined({
      name,
      email,
      user_id,
      orderBy,
    });

    const users = await this.findUsersUseCase.execute(data);

    return res.status(200).json({ users });
  }
}
