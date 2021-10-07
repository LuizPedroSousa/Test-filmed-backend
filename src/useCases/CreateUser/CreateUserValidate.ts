import { CreateUserRequestDTO } from "./CreateUserDTO";
import { string, SchemaOf, object } from "yup";
import { CustomError } from "../../entities/CustomError";
import { UserRepository } from "../../repositories/UserRepository";

export class CreateUserValidate {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: CreateUserRequestDTO): Promise<void> {
    const schema: SchemaOf<CreateUserRequestDTO> = object({
      user_id: string().required().defined(),
      name: string().required().defined(),
      email: string().email().required().defined(),
      password: string().required().defined(),
    }).defined();

    await schema.validate(data, { abortEarly: false });

    const userAlreadyExits = await this.usersRepository.findByIdOrEmail(
      data.user_id,
      data.email
    );

    if (userAlreadyExits) {
      throw new CustomError({ message: "User already exists" });
    }
  }
}
