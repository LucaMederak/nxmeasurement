import React from "react";
import { useNavigate } from "react-router";

//components
import Heading from "@components/heading/Heading";
import NewClientForm from "../components/form/ClientForm";

//interfaces
import { IFormValues } from "../components/form/ClientForm.interfaces";

//redux
import { useDispatch } from "react-redux";
import { addClient } from "@redux/clients/clients.actions";

//formik
import { FormikHelpers } from "formik";

const initialFormValues: IFormValues = {
  name: "",
  last_name: "",
  sex: "mężczyzna",
  age: 18,
  email: "",
};

const NewClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    dispatch(addClient(values));
    actions.resetForm();
    actions.setSubmitting(false);
    navigate("/dashboard/clients");
  };
  return (
    <>
      <Heading title="Nowy klient" parentPage="/dashboard/clients" />
      <NewClientForm
        initialValues={initialFormValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default NewClient;
