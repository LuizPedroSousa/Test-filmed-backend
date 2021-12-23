import { HttpException } from "@/shared/exceptions/HttpException";
import { inject, injectable } from "tsyringe";
import { IUpdateNoteDTO } from "../dtos/IUpdateNoteDTO";
import { INoteRepository } from "../repositories/INoteRepository";

@injectable()
export class UpdateNoteUseCase {
  constructor(
    @inject("NoteRepository")
    private readonly noteRepository: INoteRepository
  ) {}

  async execute({ note_id, note }: IUpdateNoteDTO) {
    const noteAlreadyExists = await this.noteRepository.updateNoteById(
      note_id,
      note
    );

    if (!noteAlreadyExists) {
      throw new HttpException({ status: 401, message: "Note not found" });
    }

    return noteAlreadyExists;
  }
}
