import { Note } from "@prisma/client";
import { NoteEntity } from "../infra/entities/Note.entity";

export interface INoteRepository {
  save(data: Omit<NoteEntity, "insertedAt">): Promise<Note>;
  findOne(where?: object): Promise<Note | undefined>;
  findAll(where?: object): Promise<Note[] | []>;
  updateNoteById(
    note_id: string,
    data: Partial<NoteEntity>
  ): Promise<Note | null>;
  deleteOne(where: object): Promise<Note | null>;
}
