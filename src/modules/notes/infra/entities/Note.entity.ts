import { User } from "@prisma/client";
import { v4 as uuid } from "uuid";

export class NoteEntity {
  public readonly id: string;
  public title: string;
  public content: string;
  public description: string;
  public userId: string
  public insertedAt: Date;

  constructor(props: Omit<NoteEntity, "id" | "insertedAt">, id?: string) {
    Object.assign(this, props);

    this.insertedAt = new Date();

    if (!this.id) {
      this.id = uuid();
    }
  }
}
