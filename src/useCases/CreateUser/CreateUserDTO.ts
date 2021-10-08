import { UserResponse } from "../../entities/UserEntityResponse";

export interface CreateUserRequestDTO {
  user_id: string;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponseDTO {
  message: string;
  user: UserResponse;
}
