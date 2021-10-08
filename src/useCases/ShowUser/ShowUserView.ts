import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { ShowUserResponseDTO } from "./ShowUserDTO";

export class ShowUserView {
  render(user: User): ShowUserResponseDTO {
    return {
      message: "Show user with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
