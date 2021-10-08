import { User } from ".prisma/client";
import bcrypt from "bcrypt";
export class UserEntity {
  public readonly id: string;

  public user_id: string;
  public name: string;
  public email: string;
  public password: string;
  public insertedAt: Date;

  // remove _id and insertedAt because both not
  constructor(props: Omit<UserEntity, "id" | "insertedAt">, id?: string) {
    Object.assign(this, props);

    this.insertedAt = new Date();

    this.id = this.user_id;
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
