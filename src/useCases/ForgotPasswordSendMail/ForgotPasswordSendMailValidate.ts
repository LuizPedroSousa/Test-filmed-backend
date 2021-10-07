import { User } from ".prisma/client";
import { SchemaOf, object, string } from "yup";
import { CustomError } from "../../entities/CustomError";
import { UserRepository } from "../../repositories/UserRepository";
import { ForgotPasswordSendMailRequestDTO } from "./ForgotPasswordSendMailDTO";

export class ForgotPasswordSendMailValidate {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: ForgotPasswordSendMailRequestDTO): Promise<User> {
    const schema: SchemaOf<ForgotPasswordSendMailRequestDTO> = object({
      email: string().email().required(),
    }).defined();

    await schema.validate(data, { abortEarly: false });

    const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

    if (!userAlreadyExits) {
      throw new CustomError({ message: "User not found" });
    }

    return userAlreadyExits;
  }
}
