import { UserResponse } from "../../entities/UserEntityResponse";

export interface DeleteUserRequestParamsDTO {
  user_id: string;
}

export interface DeleteUserResponseDTO {
  message: string;
  user: UserResponse;
}
