import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { DeleteUserResponseDTO } from "./DeleteUserDTO";

export class DeleteUserView {
  render(user: User): DeleteUserResponseDTO {
    return {
      message: "User deleted with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
