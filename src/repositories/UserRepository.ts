import { User } from "../entities/User";

export type UpdateUserByIdDTO = Omit<
  User,
  "_id" | "insertedAt" | "password" | "user_id"
>;

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
  save(user: User): Promise<void>;
  updateUserById(
    user_id: string,
    data: UpdateUserByIdDTO
  ): Promise<User | null>;
  deleteUserById(user_id: string): Promise<void>;
}
