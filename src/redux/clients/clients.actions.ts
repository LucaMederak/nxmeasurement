import { Dispatch } from "react";
import * as types from "./clients.constans";
import axios from "@utils/api";
import { AxiosError } from "axios";

//alert
import { displayAlert } from "@redux/alert/alert.actions";

//helpers
import { tokenConfig } from "@utils/tokenConfig";

//interfaces
import { Action } from "./clients.interfaces";
import { IClientsData } from "@interfaces/data/clients.interfaces";
import { TAlertActionTypes } from "@redux/alert/alert.interfaces";

// GET ProductGroups
export const getClients =
  () => async (dispatch: Dispatch<TAlertActionTypes | Action>) => {
    dispatch({ type: types.LOADING_CLIENTS });

    try {
      const clients = await axios.get(`/clients`, tokenConfig());
      dispatch({
        type: types.GET_CLIENTS,
        payload: clients.data,
      });
    } catch (error) {
      dispatch({
        type: types.ERROR_CLIENTS,
      });
    }
  };

export const addClient =
  (data: Omit<IClientsData, "_id">) =>
  async (dispatch: Dispatch<Action | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_CLIENTS });
    try {
      const client = await axios.post(`/clients`, data, tokenConfig());
      dispatch({
        type: types.ADD_CLIENT,
        payload: client.data,
      });
      dispatch(displayAlert(200, "Dodano klienta", "success"));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        dispatch({
          type: types.ERROR_CLIENTS,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Nie udało się dodać klienta",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };

export const editClient =
  (data: Omit<IClientsData, "_id">, clientEditId: string) =>
  async (dispatch: Dispatch<Action | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_CLIENTS });
    try {
      const client = await axios.put(
        `/clients/${clientEditId}`,
        data,
        tokenConfig()
      );
      dispatch({
        type: types.EDIT_CLIENT,
        payload: client.data,
      });
      dispatch(displayAlert(200, "Zaktualizowano dane klienta", "success"));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        dispatch({
          type: types.ERROR_CLIENTS,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Nie udało się edytować klienta",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };

export const deleteClient =
  (clientDeleteId: string) =>
  async (dispatch: Dispatch<Action | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_CLIENTS });
    try {
      const client = await axios.delete(
        `/clients/${clientDeleteId}`,
        tokenConfig()
      );
      dispatch({
        type: types.DELETE_CLIENT,
        payload: clientDeleteId,
      });
      dispatch(displayAlert(200, "Usunięto klienta", "success"));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        dispatch({
          type: types.ERROR_CLIENTS,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Nie udało się usunąć klienta",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };
