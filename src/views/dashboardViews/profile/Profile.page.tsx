import React from "react";

//styles
import * as Styled from "./Profile.styles";

//components
import Heading from "@components/heading/Heading";
import PageLoading from "@components/loading/pageLoading/PageLoading";

//icons
import * as Icon from "@icons/icons";

//redux
import { State } from "@redux/reducers";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, loading } = useSelector((state: State) => state.user);

  if (loading) return <PageLoading />;

  return (
    <>
      <Heading title="Profil" />
      <Styled.ProfileContainer>
        <Styled.ProfileInfoWrapper>
          <Styled.ProfileInfoItem>
            <h2>imię</h2>
            <p>{user?.name}</p>
          </Styled.ProfileInfoItem>
          <Styled.ProfileInfoItem>
            <h2>nazwisko</h2>
            <p>{user?.last_name}</p>
          </Styled.ProfileInfoItem>
          <Styled.ProfileInfoItem>
            <h2>email</h2>
            <p>{user?.email}</p>
          </Styled.ProfileInfoItem>
        </Styled.ProfileInfoWrapper>
        <Styled.AvatarWrapper>
          <span>
            <Icon.FaUser />
          </span>
        </Styled.AvatarWrapper>
      </Styled.ProfileContainer>
    </>
  );
};

export default Profile;
