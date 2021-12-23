import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { DeleteUserResponseDTO } from "../../dtos/deleteUserDTO";

@injectable()
export class DeleteUserView {
  render(user: User): DeleteUserResponseDTO {
    return {
      message: "User deleted with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
