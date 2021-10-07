import { User } from "../../entities/User";

export class ShowUserUseCase {
  execute(user: User) {
    return user;
  }
}
