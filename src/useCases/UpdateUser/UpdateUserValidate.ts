import { SchemaOf, object, string } from "yup";
import { CustomError } from "../../entities/CustomError";
import { UpdateUserRequestDTO } from "./UpdaterUserDTO";

export class UpdateUserValidate {
  async execute(data: UpdateUserRequestDTO) {
    const schema: SchemaOf<UpdateUserRequestDTO> = object({
      user_id: string().required().defined(),
      name: string().required().defined(),
      email: string().email().required().defined(),
    }).defined();

    await schema.validate(data, { abortEarly: false });
  }
}
