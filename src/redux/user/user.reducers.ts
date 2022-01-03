import * as types from "./user.constans";

//interfaces
import { IUserState, TUserActionTypes } from "./user.interfaces";

const INITIAL_STATE: IUserState = {
  user: null,
  loading: true,
  error: false,
  isAuthenticated: false,
};

const userReducers = (state = INITIAL_STATE, action: TUserActionTypes) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        user: action.payload,
        loading: false,
        error: false,
        isAuthenticated: true,
      };
    case types.CREATE_USER:
    case types.LOGIN_USER:
      //access token & refresh token
      localStorage.setItem("authorization", action.payload.accessToken);
      localStorage.setItem("x-refresh", action.payload.refreshToken);
      return {
        user: action.payload.user,
        loading: false,
        error: false,
        isAuthenticated: true,
      };

    case types.LOGOUT_USER:
      //access token & refresh token
      localStorage.removeItem("authorization");
      localStorage.removeItem("x-refresh");
      return {
        user: null,
        loading: false,
        error: false,
        isAuthenticated: false,
      };
    case types.LOADING_USER:
      return {
        user: null,
        loading: true,
        error: false,
        isAuthenticated: false,
      };
    case types.ERROR_USER:
      return {
        user: null,
        loading: false,
        error: true,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducers;
