import * as types from "./alert.constans";
import { TAlert } from "./alert.interfaces";
import { TAlertActionTypes } from "./alert.interfaces";

export const displayAlert = (
  status: TAlert["status"],
  msg: TAlert["msg"],
  type: TAlert["type"]
): TAlertActionTypes => {
  return {
    type: types.DISPLAY_ALERT,
    payload: { status, msg, type },
  };
};

export const clearAlert = () => {
  return {
    type: types.CLEAR_ALERT,
  };
};
