import { HttpException } from "@/shared/exceptions/HttpException";
import { inject, injectable } from "tsyringe";
import { IDeleteNoteDTO } from "../dtos/IDeleteNoteDTO";
import { INoteRepository } from "../repositories/INoteRepository";

@injectable()
export class DeleteNoteUseCase {
  constructor(
    @inject("NoteRepository")
    private readonly notesRepository: INoteRepository
  ) {}

  async execute({ id }: IDeleteNoteDTO) {
    const noteAlreadyExists = await this.notesRepository.findOne({ id });

    if (!noteAlreadyExists) {
      throw new HttpException({ status: 401, message: "Note not found" });
    }

    return this.notesRepository.deleteOne({ id });
  }
}
