import { UserResponse } from "../../entities/UserEntityResponse";

export interface AuthenticateUserRequestDTO {
  email: string;
  password: string;
}

export interface AuthenticateUserResponseDTO {
  message: string;
  user: UserResponse;
  token: string;
}
