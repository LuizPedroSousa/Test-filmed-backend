import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { FindUserResponseDTO } from "./FindUserDTO";

export class FindUserView {
  render(user: User): FindUserResponseDTO {
    return {
      message: "Find user with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
