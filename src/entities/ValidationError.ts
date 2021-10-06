import * as Yup from "yup";
export class ValidationError extends Error {
  public fields: Yup.ValidationError;
  constructor(message: string, fields: Yup.ValidationError) {
    super(message);
    this.fields = fields;
  }
}
