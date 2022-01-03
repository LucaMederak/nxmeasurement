import { IMeasurementData } from "@interfaces/data/measurements.interfaces";
import {
  GET_MEASUREMENTS,
  ADD_MEASUREMENT,
  EDIT_MEASUREMENT,
  DELETE_MEASUREMENT,
  LOADING_MEASUREMENTS,
  ERROR_MEASUREMENTS,
} from "./measurements.constans";

interface IGetMeasurements {
  type: typeof GET_MEASUREMENTS;
  payload: IMeasurementData[] | [];
}

interface IAddMeasurement {
  type: typeof ADD_MEASUREMENT;
  payload: IMeasurementData;
}

interface IEditMeasurement {
  type: typeof EDIT_MEASUREMENT;
  payload: IMeasurementData;
}

interface IDeleteMeasurement {
  type: typeof DELETE_MEASUREMENT;
  payload: IMeasurementData["_id"];
}

interface ILoadingMeasurements {
  type: typeof LOADING_MEASUREMENTS;
}
interface IErrorMeasurements {
  type: typeof ERROR_MEASUREMENTS;
}

export interface IMeasurementsState {
  measurements: IMeasurementData[] | [];
  loading: boolean;
  error: boolean;
}

export type Action =
  | IGetMeasurements
  | IAddMeasurement
  | IEditMeasurement
  | ILoadingMeasurements
  | IErrorMeasurements
  | IDeleteMeasurement;
