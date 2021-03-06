import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

//date-fns
import format from "date-fns/format";

import { getMeasurementClientFullName } from "@helpers/client.helpers";

//components
import Heading from "@components/heading/Heading";
import PageLoading from "@components/loading/pageLoading/PageLoading";
import Button from "@components/button/Button";
import ErrorWrapper from "@components/error/ErrorWrapper";
import DeletePopup from "@components/popup/deletePopup/DeletePopup";

//redux
import { getClients } from "@redux/clients/clients.actions";
import {
  getMeasurements,
  deleteMeasurement,
} from "@redux/measurements/measurements.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

//views
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

//icons
import * as Icon from "@icons/icons";

//styles
import * as Styled from "./Measurement.styles";

const Client = () => {
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);
  const { measurementId } = useParams();
  const navigate = useNavigate();
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

  if (measurementsLoading || !measurementId) return <PageLoading />;
  if (measurementsError) return <ErrorWrapper />;

  const measurement = measurements.find(({ _id }) => _id === measurementId);
  if (!measurement) return <NotFoundPage />;

  const measurementDate = format(new Date(measurement.createdAt), "dd.MM.yyyy");

  if (clientsLoading) return <PageLoading />;
  if (clientsError) return <ErrorWrapper />;

  const handleDeleteMeasurement = () => {
    dispatch(deleteMeasurement(measurement._id));
    navigate("/dashboard/measurements");
  };

  return (
    <>
      <Heading title="Pomiar" parentPage="/dashboard/measurements" />
      <Styled.ButtonsWrapper>
        <Button
          variant="data-secondary"
          width="30rem"
          onClick={() =>
            navigate(`/dashboard/measurements/edit/${measurement._id}`)
          }
        >
          <Icon.FaFileExport />
          Edytuj
        </Button>

        <Button
          variant="data-delete-primary"
          width="30rem"
          onClick={() => setOpenDeletePopup(true)}
        >
          <Icon.FaTrash />
          Usu??
        </Button>
      </Styled.ButtonsWrapper>

      <Styled.MeasurementContainer>
        <Styled.MeasurementInfoItem>
          <h2>nazwa</h2>
          <p>{measurement.name}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>data</h2>
          <p>{measurementDate}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>klient</h2>
          <p>
            {getMeasurementClientFullName(
              clients,
              clientsLoading,
              measurement.client
            )}
          </p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>masa cia??a (kg)</h2>
          <p>{measurement.weight}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>wysoko???? cia??a (cm)</h2>
          <p>{measurement.height}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>wsp????czynnik aktywno??ci fizycznej (PAL)</h2>
          <p>{measurement.pal}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>bmi</h2>
          <p>{measurement.bmi}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>typ bmi</h2>
          <p>{measurement.bmi_type}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>ppm (mifflin)</h2>
          <p>{measurement.ppm_mifflin}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>ppm (harris)</h2>
          <p>{measurement.ppm_harris}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>cpm</h2>
          <p>{measurement.cpm}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d klatki piersiowej we wdechu (cm)</h2>
          <p>{measurement.chest_breath}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d klatki piersiowej w wydechu (cm)</h2>
          <p>{measurement.chest_breath}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d ramienia (cm)</h2>
          <p>{measurement.shoulder}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d ramienia w napi??ciu (cm)</h2>
          <p>{measurement.shoulder_tonus}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d talii (cm)</h2>
          <p>{measurement.waist}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d bioder (cm)</h2>
          <p>{measurement.hip}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d przedramienia (cm)</h2>
          <p>{measurement.forearm}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d uda (cm)</h2>
          <p>{measurement.thigh}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>obw??d ??ydki (cm)</h2>
          <p>{measurement.calf}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>wska??nik WHR talia/biodra </h2>
          <p>{measurement.whr}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>wska??nik WHtR talia/wzrost</h2>
          <p>{measurement.whtr}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>procentowa zawarto???? tkanki t??uszczowej YMCA</h2>
          <p>{measurement.ymca}</p>
        </Styled.MeasurementInfoItem>
        <Styled.MeasurementInfoItem>
          <h2>notatki</h2>
          <p>{measurement.notes || "-"}</p>
        </Styled.MeasurementInfoItem>
      </Styled.MeasurementContainer>

      {openDeletePopup && (
        <DeletePopup
          openPopup={openDeletePopup}
          setOpenPopup={setOpenDeletePopup}
          action={handleDeleteMeasurement}
          itemName={measurement.name}
        />
      )}
    </>
  );
};

export default Client;
