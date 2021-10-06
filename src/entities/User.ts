import bcrypt from "bcrypt";

export class User {
  public readonly _id: string;

  public user_id: string;
  public name: string;
  public email: string;
  public password: string;
  public insertedAt: Date;

  constructor(props: Omit<User, "_id" | "insertedAt">, _id?: string) {
    Object.assign(this, props);

    this.insertedAt = new Date();
    this._id = this.user_id;
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
