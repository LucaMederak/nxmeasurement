import React, { useEffect } from "react";
import { TDataRows } from "@interfaces/dataGrid.interfaces";

//components
import Heading from "@components/heading/Heading";
import DataGrid from "@components/dataGrid/DataGrid";
import ErrorWrapper from "@components/error/ErrorWrapper";

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
  const {
    clients,
    loading,
    error: clientsError,
  } = useSelector((state: State) => state.clients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  if (clientsError) return <ErrorWrapper />;

  const deleteClients = () => {
    return;
  };

  return (
    <>
      <Heading title="Klienci" />
      <DataGrid
        loading={loading}
        availableColumns={availableColumns}
        dataRows={clients as any}
        deleteAction={deleteClients}
        linkPage="/dashboard/clients"
      />
    </>
  );
};

export default ClientList;
