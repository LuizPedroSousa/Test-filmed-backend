import { HttpException } from "@/shared/exceptions/HttpException";
import { Note } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IShowNoteDTO } from "../dtos/IShowNoteDTO";
import { INoteRepository } from "../repositories/INoteRepository";

@injectable()
export class ShowNoteUseCase {
  constructor(
    @inject("NoteRepository")
    private readonly noteRepository: INoteRepository
  ) {}
  async execute({ id }: IShowNoteDTO): Promise<HttpException | Note> {
    const noteAlreadyExists = await this.noteRepository.findOne({ id });

    if (!noteAlreadyExists) {
      throw new HttpException({ status: 200, message: "Note not found" });
    }

    return noteAlreadyExists;
  }
}
