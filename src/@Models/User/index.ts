import mongoose, { Schema, Model, Document } from "mongoose";
import { UserT } from "@Utils/Types";

type UserInput = {
  fullName: UserT["fullName"];
  email: UserT["email"];
  password: UserT["password"];
  enabled: UserT["enabled"];
  role: UserT["role"];
};

const usersSchema = new Schema(
  {
    fullName: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    enabled: {
      type: Schema.Types.Boolean,
      default: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
      index: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User: Model<UserT> = mongoose.model<UserT>("User", usersSchema);

export { User, UserInput };
