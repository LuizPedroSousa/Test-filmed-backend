import { User, Note } from ".prisma/client";
import { injectable } from "tsyringe";
import { UserEntityResponse } from "../../../../entities/UserEntityResponse";

@injectable()
export class ShowUserView {
  render(user: User, notes: Note[]) {
    return {
      message: "Show user with successfully",
      user: new UserEntityResponse(user),
      notes,
    };
  }
}
