import * as types from "./measurements.constans";

//interfaces
import { Action, IMeasurementsState } from "./measurements.interfaces";

const INITIAL_STATE: IMeasurementsState = {
  measurements: [],
  loading: true,
  error: false,
};

const measurementsReducers = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.GET_MEASUREMENTS:
      return {
        measurements: action.payload,
        loading: false,
        error: false,
      };

    case types.ADD_MEASUREMENT:
      return {
        measurements: [...state.measurements, action.payload],
        loading: false,
        error: false,
      };
    case types.EDIT_MEASUREMENT:
      return {
        measurements: state.measurements
          .filter(({ _id }) => _id !== action.payload._id)
          .concat([action.payload]),
        loading: false,
        error: false,
      };
    case types.DELETE_MEASUREMENT:
      return {
        measurements: state.measurements.filter(
          ({ _id }) => _id !== action.payload
        ),
        loading: false,
        error: false,
      };
    case types.LOADING_MEASUREMENTS:
      return {
        measurements: [],
        loading: true,
        error: false,
      };
    case types.ERROR_MEASUREMENTS:
      return {
        measurements: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default measurementsReducers;
