import { User } from ".prisma/client";
import { UserEntityResponse } from "../../entities/UserEntityResponse";
import { CreateUserResponseDTO } from "./CreateUserDTO";

export class CreateUserView {
  render(user: User): CreateUserResponseDTO {
    return {
      message: "User created with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
