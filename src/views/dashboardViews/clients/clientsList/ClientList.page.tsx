import React, { useEffect } from "react";

//components
import Heading from "@components/heading/Heading";
import DataGrid from "@components/dataGrid/DataGrid";

//redux
import { getClients } from "@redux/clients/clients.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

const availableColumns = [
  { label: "imię", key: "name" },
  { label: "nazwisko", key: "last_name" },
  { label: "email", key: "email" },
  { label: "wiek", key: "age" },
];

const ClientList = () => {
  const { clients, loading } = useSelector((state: State) => state.clients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  const deleteClients = () => {
    return;
  };

  return (
    <>
      <Heading title="Klienci" />
      <DataGrid
        loading={loading}
        availableColumns={availableColumns}
        dataRows={clients}
        deleteAction={deleteClients}
        linkPage="/dashboard/clients"
      />
    </>
  );
};

export default ClientList;
