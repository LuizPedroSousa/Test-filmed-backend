import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { UpdateUserResponseDTO } from "./UpdaterUserDTO";

export class UpdateUserView {
  render(user: User): UpdateUserResponseDTO {
    return {
      message: "User updated with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
