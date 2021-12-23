import { ICreateNoteDTO } from "@modules/notes/dtos/ICreateNoteDTO";
import { INoteRepository } from "@modules/notes/repositories/INoteRepository";
import { inject, injectable } from "tsyringe";
import { NoteEntity } from "../infra/entities/Note.entity";

@injectable()
export class CreateNoteUseCase {
  constructor(
    @inject("NoteRepository")
    private readonly notesRepository: INoteRepository
  ) {}

  async execute({ user_id, ...data }: ICreateNoteDTO) {
    const note = new NoteEntity({
      userId: user_id,
      ...data,
    });

    return this.notesRepository.save(note);
  }
}
