import { Response } from "express";
import { CustomRequest } from "../../entities/CustomRequest";
import { ShowUserView } from "./ShowUserView";

export class ShowUserController {
  constructor(private showUserView: ShowUserView) {}
  async handle(req: CustomRequest, res: Response): Promise<Response> {
    const { user } = req;

    const response = this.showUserView.render(user);

    return res.status(200).json(response);
  }
}
