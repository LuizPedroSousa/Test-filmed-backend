import { User } from ".prisma/client";
import { SchemaOf, object, string } from "yup";
import { CustomError } from "../../entities/CustomError";
import { UserRepository } from "../../repositories/UserRepository";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";

export class UpdateUserValidate {
  constructor(private usersRepository: UserRepository) {}
  async execute(data: UpdateUserRequestDTO, user: User) {
    const schema: SchemaOf<Omit<UpdateUserRequestDTO, "user">> = object({
      name: string().required().defined(),
      email: string().email().required().defined(),
    }).defined();

    await schema.validate(data, { abortEarly: false });

    if (data.email !== user.email) {
      const emailAlreadyExists = await this.usersRepository.findByEmail(
        data.email
      );

      if (emailAlreadyExists) {
        throw new CustomError({ message: "This email is unavailable" });
      }
    }
  }
}
