import { UserResponse } from "../../entities/UserEntityResponse";

export interface FindUsersRequestQueryParamsDTO {
  user_id?: string;
  name?: string;
  email?: string;
  orderBy: string;
}

export interface FindUsersResponseDTO {
  message: string;
  users: UserResponse[];
}
