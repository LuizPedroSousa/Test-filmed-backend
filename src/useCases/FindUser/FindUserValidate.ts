import { SchemaOf, object, string } from "yup";
import { CustomError } from "../../entities/CustomError";
import { FindUserRequestParamsDTO } from "./FindUserDTO";

export class FindUserValidate {
  async execute(data: FindUserRequestParamsDTO) {
    const schema: SchemaOf<FindUserRequestParamsDTO> = object({
      user_id: string().required().defined(),
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
