import { AuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { string, SchemaOf, object } from "yup";
import { CustomError } from "../../entities/CustomError";

export class AuthenticateUserValidate {
  async execute(data: AuthenticateUserRequestDTO): Promise<void> {
    const schema: SchemaOf<AuthenticateUserRequestDTO> = object({
      email: string().email().required().defined(),
      password: string().required().defined(),
    }).defined();

    try {
      await schema.validate(data, { abortEarly: false });
    } catch (error: any) {
      if (error.errors) {
        throw new CustomError({
          message: "Invalid data",
          fields: error.errors,
        });
      }
    }
  }
}
