import * as Yup from "yup";

interface CustomErrorProps {
  message: string;
  fields?: Yup.ValidationError;
  status?: number;
}

export class CustomError extends Error {
  public fields?: Yup.ValidationError;
  public status?: number;
  constructor({ message, fields, status }: CustomErrorProps) {
    super(message);

    if (status) {
      this.status = status;
    }

    if (fields) {
      this.fields = fields;
    }
  }
}
