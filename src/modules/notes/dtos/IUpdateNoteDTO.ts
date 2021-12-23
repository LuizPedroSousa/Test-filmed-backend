import { NoteEntity } from "../infra/entities/Note.entity";

export interface IUpdateNoteDTO {
  note_id: string;
  note: Partial<NoteEntity>;
}
