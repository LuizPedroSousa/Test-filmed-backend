import { UserResponse } from "../../../entities/UserEntityResponse";

export interface ShowUserResponseDTO {
  message: string;
  user: UserResponse;
}

export interface IShowUserDTO {
  user_id: string;
}
