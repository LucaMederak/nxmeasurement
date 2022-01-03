import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

//components
import Heading from "@components/heading/Heading";
import PageLoading from "@components/loading/pageLoading/PageLoading";
import Button from "@components/button/Button";

//redux
import { getClients, deleteClient } from "@redux/clients/clients.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

//views
import NotFoundPage from "@views/mainViews/notFound/NotFound.page";

//icons
import * as Icon from "@icons/icons";

//styles
import * as Styled from "./Client.styles";

const Client = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const { clients, loading } = useSelector((state: State) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, []);

  if (loading || !clientId) return <PageLoading />;

  const client = clients.find(({ _id }) => _id === clientId);
  if (!client) return <NotFoundPage />;

  const handleDeleteClient = () => {
    dispatch(deleteClient(client._id));
    navigate("/dashboard/clients");
  };

  return (
    <>
      <Heading title="Klient" parentPage="/dashboard/clients" />
      <Styled.ButtonsWrapper>
        <Button
          variant="data-secondary"
          width="30rem"
          onClick={() => navigate(`/dashboard/clients/edit/${client._id}`)}
        >
          <Icon.FaFileExport />
          Edytuj
        </Button>

        <Button
          variant="data-delete-primary"
          width="30rem"
          onClick={handleDeleteClient}
        >
          <Icon.FaTrash />
          Usuń
        </Button>
      </Styled.ButtonsWrapper>
      <Styled.ClientContainer>
        <Styled.ClientInfoWrapper>
          <Styled.ClientInfoItem>
            <h2>imię</h2>
            <p>{client.name}</p>
          </Styled.ClientInfoItem>
          <Styled.ClientInfoItem>
            <h2>nazwisko</h2>
            <p>{client.last_name}</p>
          </Styled.ClientInfoItem>
          <Styled.ClientInfoItem>
            <h2>email</h2>
            <p>{client.email || "-"}</p>
          </Styled.ClientInfoItem>
          <Styled.ClientInfoItem>
            <h2>wiek</h2>
            <p>{client.age}</p>
          </Styled.ClientInfoItem>
          <Styled.ClientInfoItem>
            <h2>płeć</h2>
            <p>{client.sex}</p>
          </Styled.ClientInfoItem>
        </Styled.ClientInfoWrapper>
        <Styled.AvatarWrapper>
          <span>
            <Icon.FaUser />
          </span>
        </Styled.AvatarWrapper>
      </Styled.ClientContainer>
    </>
  );
};

export default Client;
