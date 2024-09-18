import argon2 from "argon2";

export default async (password: string): Promise<string> => {
  return await argon2.hash(password);
};
