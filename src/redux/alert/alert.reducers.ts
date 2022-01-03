import * as types from "./alert.constans";

//interfaces
import { IAlertState, TAlertActionTypes } from "./alert.interfaces";

const INITIAL_STATE: IAlertState = {
  alertDisplay: false,
  status: null,
  type: null,
  message: null,
};

const alertReducers = (state = INITIAL_STATE, action: TAlertActionTypes) => {
  switch (action.type) {
    case types.DISPLAY_ALERT:
      return {
        alertDisplay: true,
        status: action.payload.status,
        message: action.payload.msg,
        type: action.payload.type,
      };
    case types.CLEAR_ALERT:
      return {
        alertDisplay: false,
        status: null,
        message: null,
        type: null,
      };

    default:
      return state;
  }
};

export default alertReducers;
