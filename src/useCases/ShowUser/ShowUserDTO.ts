import { UserResponse } from "../../entities/UserEntityResponse";

export interface ShowUserResponseDTO {
  message: string;
  user: UserResponse;
}
