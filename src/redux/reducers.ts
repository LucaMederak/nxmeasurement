import { combineReducers } from "redux";
import alertReducers from "./alert/alert.reducers";
import userReducers from "./user/user.reducers";
import clientsReducers from "./clients/clients.reducers";
import measurementsReducers from "./measurements/measurements.reducers";

const rootReducer = combineReducers({
  alert: alertReducers,
  user: userReducers,
  clients: clientsReducers,
  measurements: measurementsReducers,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
