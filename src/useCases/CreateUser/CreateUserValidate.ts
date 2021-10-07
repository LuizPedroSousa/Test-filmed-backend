import { CreateUserRequestDTO } from "./CreateUserDTO";
import { string, SchemaOf, object } from "yup";
import { CustomError } from "../../entities/CustomError";

export class CreateUserValidate {
  async execute(data: CreateUserRequestDTO): Promise<void> {
    const schema: SchemaOf<CreateUserRequestDTO> = object({
      user_id: string().required().defined(),
      name: string().required().defined(),
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
