import { DISPLAY_ALERT, CLEAR_ALERT } from "./alert.constans";

export interface TAlert {
  status: number;
  msg: string;
  type: "success" | "error";
}

export interface IAlertState {
  alertDisplay: boolean;
  status: number | null;
  message: string | null;
  type: TAlert["type"] | null;
}

export interface IDisplayAlert {
  type: typeof DISPLAY_ALERT;
  payload: TAlert;
}

export interface IClearAlert {
  type: typeof CLEAR_ALERT;
}

export type TAlertActionTypes = IDisplayAlert | IClearAlert;
