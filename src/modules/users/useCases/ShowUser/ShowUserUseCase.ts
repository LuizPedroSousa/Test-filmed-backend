import { INoteRepository } from "@modules/notes/repositories/INoteRepository";
import { IShowUserDTO } from "@modules/users/dtos/showUserDTO";
import { inject, injectable } from "tsyringe";

@injectable()
export class ShowUserUseCase {
  constructor(
    @inject("NoteRepository")
    private readonly notesRepository: INoteRepository
  ) {}
  async execute({ user_id }: IShowUserDTO) {
    const notes = await this.notesRepository.findAll({
      userId: user_id,
    });

    return notes;
  }
}
