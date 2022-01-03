import { IClientsData } from "@interfaces/data/clients.interfaces";
import {
  GET_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
  LOADING_CLIENTS,
  ERROR_CLIENTS,
} from "./clients.constans";

interface IGetClients {
  type: typeof GET_CLIENTS;
  payload: IClientsData[] | [];
}

interface IAddClient {
  type: typeof ADD_CLIENT;
  payload: IClientsData;
}

interface IEditClient {
  type: typeof EDIT_CLIENT;
  payload: IClientsData;
}

interface IDeleteClient {
  type: typeof DELETE_CLIENT;
  payload: IClientsData["_id"];
}

interface ILoadingClients {
  type: typeof LOADING_CLIENTS;
}
interface IErrorClients {
  type: typeof ERROR_CLIENTS;
}

export interface IClientsState {
  clients: IClientsData[] | [];
  loading: boolean;
  error: boolean;
}

export type Action =
  | IGetClients
  | IAddClient
  | IEditClient
  | ILoadingClients
  | IErrorClients
  | IDeleteClient;
