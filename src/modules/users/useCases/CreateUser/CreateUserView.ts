import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { CreateUserResponseDTO } from "../../dtos/createUserDTO";

@injectable()
export class CreateUserView {
  render(user: User): CreateUserResponseDTO {
    return {
      message: "User created with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
