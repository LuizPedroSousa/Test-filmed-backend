import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { UpdateUserResponseDTO } from "../../dtos/updaterUserDTO";

@injectable()
export class UpdateUserView {
  render(user: User): UpdateUserResponseDTO {
    return {
      message: "User updated with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
