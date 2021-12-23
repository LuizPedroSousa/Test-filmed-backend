import { UserResponse } from "../../../entities/UserEntityResponse";

export interface CreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponseDTO {
  message: string;
  user: UserResponse;
}
