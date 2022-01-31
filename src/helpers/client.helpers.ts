import { IClientsData } from "@interfaces/data/clients.interfaces";

export const getMeasurementClientFullName = (
  clients: IClientsData[],
  clientsLoading: boolean,
  clientId: string
) => {
  if (clientsLoading) {
    return "...";
  }

  const client = clients.find(({ _id }) => _id === clientId);

  if (!client) {
    return "-";
  }

  const clientFullName = client.name + " " + client.last_name;
  return clientFullName;
};
