import { Dispatch } from "react";
import * as types from "./measurements.constans";
import axios from "@utils/api";
import { AxiosError } from "axios";

//alert
import { displayAlert } from "@redux/alert/alert.actions";

//helpers
import { tokenConfig } from "@utils/tokenConfig";

//interfaces
import { Action } from "./measurements.interfaces";
import { IMeasurementData } from "@interfaces/data/measurements.interfaces";
import { TAlertActionTypes } from "@redux/alert/alert.interfaces";

// GET ProductGroups
export const getMeasurements =
  () => async (dispatch: Dispatch<TAlertActionTypes | Action>) => {
    dispatch({ type: types.LOADING_MEASUREMENTS });

    try {
      const measurements = await axios.get(`/measurements`, tokenConfig());
      dispatch({
        type: types.GET_MEASUREMENTS,
        payload: measurements.data,
      });
    } catch (error) {
      dispatch({
        type: types.ERROR_MEASUREMENTS,
      });
    }
  };

export const addMeasurement =
  (data: Omit<IMeasurementData, "_id" | "user" | "createdAt" | "updatedAt">) =>
  async (dispatch: Dispatch<Action | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_MEASUREMENTS });
    try {
      const measurement = await axios.post(
        `/measurements`,
        data,
        tokenConfig()
      );
      dispatch({
        type: types.ADD_MEASUREMENT,
        payload: measurement.data,
      });
      dispatch(displayAlert(200, "Dodano pomiar dla klienta", "success"));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        console.log(err.response);
        dispatch({
          type: types.ERROR_MEASUREMENTS,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Nie udało się dodać pomiaru dla klienta",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };

export const editMeasurement =
  (
    data: Omit<IMeasurementData, "_id" | "user" | "createdAt" | "updatedAt">,
    measurementEditId: string
  ) =>
  async (dispatch: Dispatch<Action | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_MEASUREMENTS });
    try {
      const measurement = await axios.put(
        `/measurements/${measurementEditId}`,
        data,
        tokenConfig()
      );
      dispatch({
        type: types.EDIT_MEASUREMENT,
        payload: measurement.data,
      });
      dispatch(displayAlert(200, "Zaktualizowano dane pomiaru", "success"));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        dispatch({
          type: types.ERROR_MEASUREMENTS,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Nie udało się edytować pomiaru",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };

export const deleteMeasurement =
  (measurementDeleteId: string) =>
  async (dispatch: Dispatch<Action | TAlertActionTypes>) => {
    dispatch({ type: types.LOADING_MEASUREMENTS });
    try {
      const measurement = await axios.delete(
        `/measurements/${measurementDeleteId}`,
        tokenConfig()
      );
      dispatch({
        type: types.DELETE_MEASUREMENT,
        payload: measurementDeleteId,
      });
      dispatch(displayAlert(200, "Usunięto pomiar", "success"));
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        dispatch({
          type: types.ERROR_MEASUREMENTS,
        });
        dispatch(
          displayAlert(
            err.response.status,
            "Nie udało się usunąć pomiaru",
            "error"
          )
        );
      } else {
        dispatch(displayAlert(500, "Wystąpił problem z serwerem", "error"));
      }
    }
  };
