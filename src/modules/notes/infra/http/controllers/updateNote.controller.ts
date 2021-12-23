import { UpdateNoteUseCase } from "@modules/notes/useCases/UpdateNoteUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateNoteController {
  async handle(req: Request, res: Response) {
    const {
      body,
      params: { note_id },
    } = req;

    const updateNoteUseCase = container.resolve(UpdateNoteUseCase);

    const note = await updateNoteUseCase.execute({
      note_id,
      note: { ...body },
    });

    return res
      .status(200)
      .json({ message: "Update note with successfully", note });
  }
}
