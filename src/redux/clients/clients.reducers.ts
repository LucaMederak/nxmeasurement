import * as types from "./clients.constans";

//interfaces
import { Action, IClientsState } from "./clients.interfaces";

const INITIAL_STATE: IClientsState = {
  clients: [],
  loading: true,
  error: false,
};

const clientsReducers = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.GET_CLIENTS:
      return {
        clients: action.payload,
        loading: false,
        error: false,
      };

    case types.ADD_CLIENT:
      return {
        clients: [...state.clients, action.payload],
        loading: false,
        error: false,
      };
    case types.EDIT_CLIENT:
      return {
        clients: state.clients
          .filter(({ _id }) => _id !== action.payload._id)
          .concat([action.payload]),
        loading: false,
        error: false,
      };
    case types.DELETE_CLIENT:
      return {
        clients: state.clients.filter(({ _id }) => _id !== action.payload),
        loading: false,
        error: false,
      };
    case types.LOADING_CLIENTS:
      return {
        clients: [],
        loading: true,
        error: false,
      };
    case types.ERROR_CLIENTS:
      return {
        clients: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default clientsReducers;
