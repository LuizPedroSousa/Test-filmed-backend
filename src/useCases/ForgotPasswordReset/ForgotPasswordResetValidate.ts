import { SchemaOf, string, object } from "yup";
import { ForgotPasswordResetRequestDTO } from "./ForgotPasswordResetDTO";

export class ForgotPasswordResetValidate {
  async execute(data: ForgotPasswordResetRequestDTO): Promise<void> {
    const schema: SchemaOf<Omit<ForgotPasswordResetRequestDTO, "user">> =
      object({
        password: string().required().defined(),
      }).defined();

    await schema.validate(data, { abortEarly: false });
  }
}
