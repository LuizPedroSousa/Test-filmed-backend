import { User } from "../../entities/User";

export interface UpdateUserRequestDTO {
  name: string;
  email: string;
  user: User;
}
