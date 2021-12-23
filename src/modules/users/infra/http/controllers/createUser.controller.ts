import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "../../../useCases/CreateUser/CreateUserUseCase";
import { CreateUserValidate } from "../../../useCases/CreateUser/CreateUserValidate";
import { CreateUserView } from "../../../useCases/CreateUser/CreateUserView";
export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id, name, email, password } = req.body;

    const data = {
      user_id,
      name,
      email,
      password,
    };

    const createUserValidate = container.resolve(CreateUserValidate);
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const createUserView = container.resolve(CreateUserView);

    await createUserValidate.execute(data);

    const user = await createUserUseCase.execute(data);

    const response = createUserView.render(user);

    return res.status(201).json(response);
  }
}
