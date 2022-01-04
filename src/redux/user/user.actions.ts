import * as types from "./user.constans";
import axios from "@utils/api";
import { AxiosError } from "axios";
import { Dispatch } from "react";
import { displayAlert } from "@redux/alert/alert.actions";

//helpers
import { tokenConfig } from "@utils/tokenConfig";

//interfaces
import { TUserActionTypes } from "./user.interfaces";
import { IUserData } from "@interfaces/data/user.interfaces";
import { TAlertActionTypes } from "@redux/alert/alert.interfaces";

//get user
export const getUser = () => async (dispatch: Dispatch<TUserActionTypes>) => {
  dispatch({ type: types.LOADING_USER });

  try {
    const user = await axios.get(`/users`, tokenConfig());
    const userAuth = user.headers["x-access-token"];

    if (userAuth) {
      localStorage.setItem("authorization", userAuth);
    }

    dispatch({
      type: types.GET_USER,
      payload: user.data,
    });
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);

    if (err.response) {
      dispatch({
        type: types.ERROR_USER,
      });
    }
  }
};

//create user
export const createUser =
  (data: Omit<IUserData, "avatar" | "createdAt" | "updatedAt">) =>
  async (dispatch: Dispatch<TUserActionTypes | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_USER });

    try {
      const user = await axios.post(`/users`, data);
      dispatch({
        type: types.CREATE_USER,
        payload: user.data,
      });

      dispatch(displayAlert(user.data.status, "Utworzono konto", "success"));

      dispatch({
        type: types.CREATE_USER,
        payload: user.data,
      });
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        dispatch({
          type: types.ERROR_USER,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Rejestracja nie powiodła się",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };

//login
export const loginUser =
  (data: Pick<IUserData, "email" | "password">) =>
  async (dispatch: Dispatch<TUserActionTypes | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_USER });

    try {
      const session = await axios.post(`/sessions`, data);
      dispatch({
        type: types.LOGIN_USER,
        payload: session.data, //user && access token & refresh token
      });
      dispatch(displayAlert(session.status, "Zalogowano", "success"));
    } catch (error) {
      const err = error as AxiosError;
      dispatch({
        type: types.ERROR_USER,
      });
      if (err.response) {
        dispatch(
          displayAlert(
            err.response.status,
            "Logowanie nie powiodło się",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };

//logout
export const logout =
  () => async (dispatch: Dispatch<TUserActionTypes | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_USER });

    try {
      const session = await axios.delete(`/sessions`, tokenConfig());
      dispatch({
        type: types.LOGOUT_USER,
      });
      dispatch(displayAlert(session.status, "Wylogowano", "success"));
    } catch (error) {
      const err = error as AxiosError;
      dispatch({
        type: types.ERROR_USER,
      });
      if (err.response) {
        dispatch(
          displayAlert(
            err.response.status,
            "Wylogowanie nie powiodło się",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };
