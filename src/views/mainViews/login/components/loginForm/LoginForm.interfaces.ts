import { IUserData } from "@interfaces/data/user.interfaces";

export type TLoginFormValues = Pick<IUserData, "email" | "password">;
