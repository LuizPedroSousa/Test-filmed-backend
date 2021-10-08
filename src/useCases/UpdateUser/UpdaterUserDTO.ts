import { UserResponse } from "../../entities/UserEntityResponse";

export interface UpdateUserRequestDTO {
  name: string;
  email: string;
}

export interface UpdateUserResponseDTO {
  message: string;
  user: UserResponse;
}
