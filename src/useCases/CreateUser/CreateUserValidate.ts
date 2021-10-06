import { CreateUserRequestDTO } from "./CreateUserDTO";
import { string, SchemaOf, object } from "yup";
import { ValidationError } from "../../entities/ValidationError";

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
        throw new ValidationError("Invalid data", error.errors);
      }
    }
  }
}
