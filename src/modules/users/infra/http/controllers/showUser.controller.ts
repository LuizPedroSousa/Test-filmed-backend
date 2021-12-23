import { ShowUserUseCase } from "@modules/users/useCases/ShowUser/ShowUserUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowUserView } from "../../../useCases/ShowUser/ShowUserView";

export class ShowUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req as any;

    const showUserUseCase = container.resolve(ShowUserUseCase);
    const showUserView = container.resolve(ShowUserView);

    const notes = await showUserUseCase.execute({ user_id: user?.id });

    const response = showUserView.render(user, notes);

    return res.status(200).json(response);
  }
}
