import { UserResponse } from "../../../entities/UserEntityResponse";

export interface ForgotPasswordResetRequestDTO {
  password: string;
}

export interface ForgotPasswordResetResponseDTO {
  message: string;
  user: UserResponse;
}
