import { AuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { string, SchemaOf, object } from "yup";

export class AuthenticateUserValidate {
  async execute(data: AuthenticateUserRequestDTO): Promise<void> {
    const schema: SchemaOf<AuthenticateUserRequestDTO> = object({
      email: string().email().required().defined(),
      password: string().required().defined(),
    }).defined();

    await schema.validate(data, { abortEarly: false });
  }
}
