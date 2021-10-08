import { User } from ".prisma/client";

export type UserResponse = {
  user_id: string;
  name: string;
  email: string;
  insertedAt: Date | null;
};

export class UserEntityResponse {
  public user_id: string;
  public name: string;
  public email: string;
  public insertedAt: Date | null;

  constructor(user: User) {
    Object.assign(this, {
      user_id: user.id,
      name: user.name,
      email: user.email,
      insertedAt: user.insertedAt,
    } as UserResponse);
  }
}
