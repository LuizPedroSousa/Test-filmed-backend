import { DeleteNoteUseCase } from "@modules/notes/useCases/DeleteNoteUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteNoteController {
  async handle(req: Request, res: Response) {
    const { note_id } = req.params;

    const deleteNoteUseCase = container.resolve(DeleteNoteUseCase);

    const note = await deleteNoteUseCase.execute({ id: note_id });

    return res.status(200).json({ message: "Note has been deleted ", note });
  }
}
