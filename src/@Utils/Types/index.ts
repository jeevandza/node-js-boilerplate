import { Document } from "mongoose";

 export type UserT = Document &{
    fullName: string; 
    email: string;
    password: string;
    enabled: string;
    role: string;
}


export type RoleT = Document & {
    name: string;
    description: string | null;
  };
  