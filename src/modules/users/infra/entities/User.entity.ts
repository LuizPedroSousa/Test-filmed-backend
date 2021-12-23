import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export class UserEntity {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  public insertedAt: Date;

  constructor(props: Omit<UserEntity, "id" | "insertedAt">, id?: string) {
    Object.assign(this, props);

    this.insertedAt = new Date();

    if (!this.id) {
      this.id = uuid();
    }

    this.password = bcrypt.hashSync(this.password, 8);
  }
}
