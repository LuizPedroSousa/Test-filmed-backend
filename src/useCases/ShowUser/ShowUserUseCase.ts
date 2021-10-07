import { User } from ".prisma/client";

export class ShowUserUseCase {
  execute(user: User) {
    return user;
  }
}
