import {
  GET_USER,
  CREATE_USER,
  LOADING_USER,
  ERROR_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "./user.constans";

import { IUserData } from "@interfaces/data/user.interfaces";

interface IGetUser {
  type: typeof GET_USER;
  payload: IUserData;
}

interface ICreateUser {
  type: typeof CREATE_USER;
  payload: {
    user: IUserData;
    accessToken: string;
    refreshToken: string;
  };
}

interface ILoginUser {
  type: typeof LOGIN_USER;
  payload: {
    user: IUserData;
    accessToken: string;
    refreshToken: string;
  };
}

interface ILogoutUser {
  type: typeof LOGOUT_USER;
}

interface ILoadingUser {
  type: typeof LOADING_USER;
}

interface IErrorUser {
  type: typeof ERROR_USER;
}

export interface IUserState {
  user: Omit<IUserData, "password" | "passwordConfirmation"> | null;
  loading: boolean;
  error: boolean;
  isAuthenticated: boolean;
}

export type TUserActionTypes =
  | IGetUser
  | ICreateUser
  | ILoadingUser
  | IErrorUser
  | ILoginUser
  | ILogoutUser;
