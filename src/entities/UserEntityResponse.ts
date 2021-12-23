import { User } from ".prisma/client";

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  insertedAt: Date | null;
};

export class UserEntityResponse {
  public id: string;
  public name: string;
  public email: string;
  public insertedAt: Date | null;

  constructor(user: User) {
    Object.assign(this, {
      id: user.id,
      name: user.name,
      email: user.email,
      insertedAt: user.insertedAt,
    } as UserResponse);
  }
}
