import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

//interfaces
import {
  IInitialValues,
  IFormValues,
} from "../components/form/MeasurementForm.interfaces";

//components
import Heading from "@components/heading/Heading";
import MeasurementForm from "../components/form/MeasurementForm";
import PageLoading from "@components/loading/pageLoading/PageLoading";
import ClientsNotFound from "../components/clientsNotFound/ClientsNotFound";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  editMeasurement,
  getMeasurements,
} from "@redux/measurements/measurements.actions";
import { getClients } from "@redux/clients/clients.actions";
import { State } from "@redux/reducers";

//formik
import { FormikHelpers } from "formik";

//helpers
import {
  bmiHelper,
  bmiTypeHelper,
  ppmHelper,
  cpmHelper,
  WHRHelper,
  WHtRHelper,
  YMCAHelper,
} from "@helpers/measurement.helpers";

//views
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

const EditMeasurement = () => {
  const { measurementEditId } = useParams();
  const navigate = useNavigate();

  const { clients, loading: clientsLoading } = useSelector(
    (state: State) => state.clients
  );
  const { measurements, loading: measurementsLoading } = useSelector(
    (state: State) => state.measurements
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
    dispatch(getMeasurements());
  }, []);

  //get measurement
  if (measurementsLoading || !measurementEditId) return <PageLoading />;

  const measurement = measurements.find(({ _id }) => _id === measurementEditId);
  if (!measurement) return <NotFoundPage />;

  //clients
  if (clientsLoading) return <PageLoading />;
  if (!clientsLoading && clients.length < 1) return <ClientsNotFound />;

  const initialFormValues: IInitialValues = {
    client: measurement.client,
    name: measurement.name,
    notes: measurement.notes,
    weight: measurement.weight,
    height: measurement.height,
    pal: measurement.pal,

    //circuits
    chest_breath: measurement.chest_breath,
    chest_exhaust: measurement.chest_exhaust,
    shoulder: measurement.shoulder,
    shoulder_tonus: measurement.shoulder_tonus,
    waist: measurement.waist,
    hip: measurement.hip,
    forearm: measurement.forearm,
    thigh: measurement.thigh,
    calf: measurement.calf,
  };

  const handleSubmit = (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    const { client, weight, height, pal, waist, hip } = values;

    const clientInfo = () => {
      const clientObj = clients.find(({ _id }) => _id === client);
      if (clientObj) {
        const sex = clientObj.sex;
        const age = clientObj.age;
        return { age, sex };
      }

      return { age: undefined, sex: undefined };
    };
    const { age, sex } = clientInfo();

    const bmi = bmiHelper(weight, height);
    const bmi_type = bmiTypeHelper(bmi);
    const { ppm_harris, ppm_mifflin } = ppmHelper(sex, weight, height, age);
    const cpm = cpmHelper(ppm_harris, pal);

    //additional helpers
    const whtr = WHtRHelper(waist, height);
    const whr = WHRHelper(waist, hip);
    const ymca = YMCAHelper(waist, weight, sex);

    const measurementValues = {
      ...values,
      bmi,
      bmi_type,
      ppm_harris,
      ppm_mifflin,
      cpm,
      whtr,
      whr,
      ymca,
    };

    dispatch(editMeasurement(measurementValues as any, measurementEditId));
    actions.resetForm();
    actions.setSubmitting(false);
    navigate("/dashboard/clients");
  };

  return (
    <>
      <Heading title="Pomiar" parentPage="/dashboard/measurements" />
      <MeasurementForm
        clients={clients}
        initialValues={initialFormValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditMeasurement;
