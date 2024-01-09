import mongoose, { Schema, Model, Document } from 'mongoose';
import {RoleT} from '@Utils/Types'



type RoleInput = {
  name: RoleT['name'];
  description: RoleT['description'];
};

const roleSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    description: {
      type: Schema.Types.String,
      default: null,
    },
  },
  {
    collection: 'roles',
    timestamps: true,
  },
);

const Role: Model<RoleT> = mongoose.model<RoleT>('Role', roleSchema);
  
export { Role, RoleInput };