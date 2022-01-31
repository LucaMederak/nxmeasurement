import React, { useEffect } from "react";
import { useNavigate } from "react-router";

//interfaces
import {
  IInitialValues,
  IFormValues,
} from "../components/form/MeasurementForm.interfaces";

import { getMeasurementClientFullName } from "@helpers/client.helpers";

//components
import Heading from "@components/heading/Heading";
import NewMeasurementForm from "../components/form/MeasurementForm";
import PageLoading from "@components/loading/pageLoading/PageLoading";
import ClientsNotFound from "../components/clientsNotFound/ClientsNotFound";
import ErrorWrapper from "@components/error/ErrorWrapper";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addMeasurement } from "@redux/measurements/measurements.actions";
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

const initialFormValues: IInitialValues = {
  client: "",
  name: "",
  notes: "",
  weight: 0,
  height: 0,
  pal: 0,

  //circuits
  chest_breath: 0,
  chest_exhaust: 0,
  shoulder: 0,
  shoulder_tonus: 0,
  waist: 0,
  hip: 0,
  forearm: 0,
  thigh: 0,
  calf: 0,
};

const NewMeasurement = () => {
  const {
    clients,
    loading: clientsLoading,
    error: clientsError,
  } = useSelector((state: State) => state.clients);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  if (clientsError) return <ErrorWrapper />;
  if (!clientsLoading && clients.length < 1) return <ClientsNotFound />;

  const clientsList = () => {
    const modifyClients = clients.map((data) => ({
      ...data,
      client: getMeasurementClientFullName(clients, clientsLoading, data._id),
    }));
    return modifyClients;
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

    dispatch(addMeasurement(measurementValues as any));
    actions.resetForm();
    actions.setSubmitting(false);
    navigate("/dashboard/measurements");
  };
  return (
    <>
      <Heading title="Nowy pomiar" parentPage="/dashboard/measurements" />
      <NewMeasurementForm
        clients={clientsList()}
        initialValues={initialFormValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default NewMeasurement;
