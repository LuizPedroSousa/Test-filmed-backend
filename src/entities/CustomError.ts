import * as Yup from "yup";
export class CustomError extends Error {
  public fields?: Yup.ValidationError;
  constructor(message: string, fields?: Yup.ValidationError) {
    super(message);
    if (fields) {
      this.fields = fields;
    }
  }
}
