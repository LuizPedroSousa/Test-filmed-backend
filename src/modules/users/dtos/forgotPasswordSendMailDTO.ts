type UserResponse = {
  email: string;
};

export interface ForgotPasswordSendMailRequestDTO {
  email: string;
}

export interface ForgotPasswordSendMailResponseDTO {
  message: string;
  user: UserResponse;
}
