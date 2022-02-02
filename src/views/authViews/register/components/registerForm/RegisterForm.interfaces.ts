import { IUserData } from "@interfaces/data/user.interfaces";

export type TRegisterFormValues = Omit<
  IUserData,
  "avatar" | "createdAt" | "updatedAt"
>;
