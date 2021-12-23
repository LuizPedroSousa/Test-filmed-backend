import { ShowNoteUseCase } from "@modules/notes/useCases/ShowNoteUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ShowNoteController {
  async handle(req: Request, res: Response) {
    const { note_id } = req.params;

    const showNoteUseCase = container.resolve(ShowNoteUseCase);

    const note = await showNoteUseCase.execute({ id: note_id });

    return res
      .status(200)
      .json({ message: "Show note with successfully", note });
  }
}
