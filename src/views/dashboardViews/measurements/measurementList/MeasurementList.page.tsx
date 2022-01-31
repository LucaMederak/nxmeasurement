import React, { useEffect } from "react";

//date-fns
import format from "date-fns/format";

//components
import Heading from "@components/heading/Heading";
import DataGrid from "@components/dataGrid/DataGrid";
import ErrorWrapper from "@components/error/ErrorWrapper";

//redux
import { getMeasurements } from "@redux/measurements/measurements.actions";
import { getClients } from "@redux/clients/clients.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

import { getMeasurementClientFullName } from "@helpers/client.helpers";

const availableColumns = [
  { label: "klient", key: "client" },
  { label: "data", key: "createdAt" },
  { label: "masa ciała", key: "weight" },
  { label: "wysokość ciała", key: "height" },
  { label: "pal", key: "pal" },
  { label: "bmi", key: "bmi" },
  { label: "ppm (mifflin)", key: "ppm_mifflin" },
  { label: "ppm (harris)", key: "ppm_harris" },
  { label: "cpm", key: "cpm" },
];

const MeasurementList = () => {
  const {
    measurements,
    loading: measurementsLoading,
    error: measurementsError,
  } = useSelector((state: State) => state.measurements);

  const {
    clients,
    loading: clientsLoading,
    error: clientsError,
  } = useSelector((state: State) => state.clients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeasurements());
    dispatch(getClients());
  }, []);

  if (measurementsError || clientsError) return <ErrorWrapper />;

  const measurementList = () => {
    const modifyMeasurements = measurements.map((data) => ({
      ...data,
      createdAt: format(new Date(data.createdAt), "dd.MM.yyyy"),
      client: getMeasurementClientFullName(
        clients,
        clientsLoading,
        data.client
      ),
    }));

    return modifyMeasurements;
  };

  const deleteMeasurements = () => {
    return;
  };

  return (
    <>
      <Heading title="Pomiary" />
      <DataGrid
        loading={measurementsLoading}
        availableColumns={availableColumns}
        dataRows={measurementList()}
        deleteAction={deleteMeasurements}
        linkPage="/dashboard/measurements"
      />
    </>
  );
};

export default MeasurementList;
