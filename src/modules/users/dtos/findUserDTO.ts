import { UserResponse } from "../../../entities/UserEntityResponse";

export interface FindUserRequestParamsDTO {
  user_id: string;
}

export interface FindUserResponseDTO {
  message: string;
  user: UserResponse;
}
