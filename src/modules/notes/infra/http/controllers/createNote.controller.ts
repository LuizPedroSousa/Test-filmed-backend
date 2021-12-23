import { CreateNoteUseCase } from "@modules/notes/useCases/CreateNoteUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateNoteController {
  async handle(req: Request, res: Response) {
    const { user, body } = req as any;
    const createNoteUseCase = container.resolve(CreateNoteUseCase);

    const note = await createNoteUseCase.execute({
      user_id: user?.id,
      ...body,
    });

    return res
      .status(200)
      .json({ message: "Create note with successfully", note });
  }
}
