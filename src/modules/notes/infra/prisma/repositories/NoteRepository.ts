import { client } from "@/database/client";
import { INoteRepository } from "@modules/notes/repositories/INoteRepository";
import { Note } from "@prisma/client";
import { injectable } from "tsyringe";
import { NoteEntity } from "../../entities/Note.entity";

@injectable()
export class NoteRepository implements INoteRepository {
  async save(data: Omit<NoteEntity, "insertedAt">): Promise<Note> {
    return client.note.create({
      data: { ...data } as any,
    });
  }

  async findOne(where?: object): Promise<Note | undefined> {
    return client.note.findUnique({ where });
  }

  async findAll(where?: object): Promise<Note[]> {
    return client.note.findMany({ where });
  }

  async updateNoteById(
    note_id: string,
    data: Partial<NoteEntity>
  ): Promise<Note | null> {
    return client.note.update({
      where: { id: note_id },
      data: { ...data } as any,
    });
  }

  async deleteOne(where: object): Promise<Note | null> {
    return client.note.delete({ where });
  }
}
