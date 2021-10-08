import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { FindUsersResponseDTO } from "./FindUsersDTO";

export class FindUsersView {
  render(users: User[]): FindUsersResponseDTO {
    return {
      message: users.length
        ? "Find users with successfully"
        : "Users not found",
      users: users.map((user) => new UserEntityResponse(user)),
    };
  }
}
