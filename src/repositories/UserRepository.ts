import { User } from ".prisma/client";
import { UserEntity } from "../entities/UserEntity";

export type UpdateUserByIdDTO = Partial<Omit<UserEntity, "id" | "insertedAt">>;

export interface FindManyDTO {
  name?: string;
  email?: string;
  user_id?: string;
  orderBy?: string;
}

export interface UserRepository {
  findById(user_id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByIdOrEmail(user_id: string, email: string): Promise<User | null>;
  findMany(data: FindManyDTO): Promise<User[] | []>;
  save(user: UserEntity): Promise<void>;
  updateUserById(
    user_id: string,
    data: UpdateUserByIdDTO
  ): Promise<User | null>;
  deleteUserById(user_id: string): Promise<void>;
}
