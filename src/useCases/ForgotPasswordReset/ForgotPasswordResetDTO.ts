import { User } from "../../entities/User";

export interface ForgotPasswordResetRequestDTO {
  password: string;
  user: User;
}
