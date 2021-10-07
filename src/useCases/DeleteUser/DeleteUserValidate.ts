import { SchemaOf, object, string } from "yup";
import { CustomError } from "../../entities/CustomError";
import { DeleteUserRequestParamsDTO } from "./DeleteUserDTO";

export class DeleteUserValidate {
  async execute(data: DeleteUserRequestParamsDTO): Promise<void> {
    const schema: SchemaOf<DeleteUserRequestParamsDTO> = object({
      user_id: string().required().defined(),
    }).defined();

    await schema.validate(data, { abortEarly: false });
  }
}
