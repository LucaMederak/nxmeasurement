import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

//components
import Heading from "@components/heading/Heading";
import ClientForm from "../components/form/ClientForm";
import PageLoading from "@components/loading/pageLoading/PageLoading";

//redux
import { getClients, editClient } from "@redux/clients/clients.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

//interfaces
import { IFormValues } from "../components/form/ClientForm.interfaces";

//views
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

//formik
import { FormikHelpers } from "formik";

const EditClient = () => {
  const { clientEditId } = useParams();
  const navigate = useNavigate();
  const { clients, loading } = useSelector((state: State) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  if (loading || !clientEditId) return <PageLoading />;

  const client = clients.find(({ _id }) => _id === clientEditId);
  if (!client) return <NotFoundPage />;

  const initialFormValues: IFormValues = {
    name: client.name,
    last_name: client.last_name,
    sex: client.sex,
    age: client.age,
    email: client.email,
  };

  const handleSubmit = (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    dispatch(editClient(values, clientEditId));
    actions.resetForm();
    actions.setSubmitting(false);
    navigate("/dashboard/clients");
  };

  return (
    <>
      <Heading title="Klient" parentPage="/dashboard/clients" />
      <ClientForm
        initialValues={initialFormValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditClient;
