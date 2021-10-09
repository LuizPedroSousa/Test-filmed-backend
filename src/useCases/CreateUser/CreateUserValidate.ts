import { CreateUserRequestDTO } from "./CreateUserDTO";
import { string, SchemaOf, object } from "yup";
import { HttpException } from "../../exceptions/HttpException";
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
      throw new HttpException({ message: "User already exists" });
    }
  }
}
