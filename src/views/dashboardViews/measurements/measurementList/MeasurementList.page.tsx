import React, { useEffect } from "react";

//date-fns
import format from "date-fns/format";

//components
import Heading from "@components/heading/Heading";
import DataGrid from "@components/dataGrid/DataGrid";
import ErrorWrapper from "@components/error/ErrorWrapper";

//redux
import { getMeasurements } from "@redux/measurements/measurements.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

const availableColumns = [
  { label: "nazwa", key: "name" },
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeasurements());
  }, []);

  if (measurementsError) return <ErrorWrapper />;

  const modifyMeasurements = measurements.map(
    (data) =>
      data && {
        ...data,
        createdAt: format(new Date(data.createdAt), "dd.MM.yyyy"),
      }
  );

  const deleteMeasurements = () => {
    return;
  };

  return (
    <>
      <Heading title="Pomiary" />
      <DataGrid
        loading={measurementsLoading}
        availableColumns={availableColumns}
        dataRows={modifyMeasurements}
        deleteAction={deleteMeasurements}
        linkPage="/dashboard/measurements"
      />
    </>
  );
};

export default MeasurementList;
