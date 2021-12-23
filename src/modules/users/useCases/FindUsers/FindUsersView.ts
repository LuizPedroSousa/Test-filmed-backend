import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { FindUsersResponseDTO } from "../../dtos/findUsersDTO";

@injectable()
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
