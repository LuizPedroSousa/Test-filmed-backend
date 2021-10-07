import { SchemaOf, object, string } from "yup";
import { CustomError } from "../../entities/CustomError";
import { FindUserRequestParamsDTO } from "./FindUserDTO";

export class FindUserValidate {
  async execute(data: FindUserRequestParamsDTO): Promise<void> {
    const schema: SchemaOf<FindUserRequestParamsDTO> = object({
      user_id: string().required().defined(),
    }).defined();

    await schema.validate(data, { abortEarly: false });
  }
}
