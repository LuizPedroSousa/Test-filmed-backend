import { User } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";
import { FindUserResponseDTO } from "../../dtos/findUserDTO";

@injectable()
export class FindUserView {
  render(user: User): FindUserResponseDTO {
    return {
      message: "Find user with successfully",
      user: new UserEntityResponse(user),
    };
  }
}
