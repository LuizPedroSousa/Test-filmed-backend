import { Schema, model } from "mongoose";
import { User } from "../../../entities/User";

type UserSchemaProps = User & Document;

const UserSchema = new Schema<UserSchemaProps>({
  _id: String,
  name: String,
  email: String,
  password: String,
  insertedAt: Date,
});

const UserModel = model<UserSchemaProps>("User", UserSchema);

export { UserModel };
