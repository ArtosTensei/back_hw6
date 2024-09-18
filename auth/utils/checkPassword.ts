import argon2 from "argon2";
import { UserAttributes } from "../models/users/User";

export default async (
  user: UserAttributes,
  password: string
): Promise<boolean> => {
  return await argon2.verify(user.password, password);
};
