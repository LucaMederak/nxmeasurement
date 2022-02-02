import React, { useState } from "react";
import { Link } from "react-router-dom";

//animations
import { AnimatePresence } from "framer-motion";

//components
import Logo from "@assets/logo.svg";

//styles
import * as Styled from "./Nav.styles";

//components
import Burger from "../burger/Burger";
import Switch from "@components/switch/Switch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//context
import { useDarkMode } from "@context/darkMode";

//icons
import * as Icon from "@icons/icons";

//redux
import { State } from "@redux/reducers";
import { useSelector } from "react-redux";

const Nav = () => {
  const { darkMode } = useDarkMode();
  const [burgerOpen, setBurgerOpen] = useState(false);

  const { user, loading: userLoading } = useSelector(
    (state: State) => state.user
  );

  const skeletonDarkTheme = {
    baseColor: darkMode ? "#000000" : "#f3f3f3",
    highlightColor: darkMode ? "rgb(31, 31, 31)" : "#ebebeb",
  };

  const userLinks = () => {
    if (userLoading) {
      return (
        <Skeleton
          {...skeletonDarkTheme}
          width={200}
          height={40}
          borderRadius={4}
        />
      );
    }

    if (!user && !userLoading) {
      return (
        <>
          <Link to="/auth/login">zaloguj się</Link>
          <Link to="/auth/register">załóż konto</Link>
        </>
      );
    }
    if (user) {
      return <Link to="/dashboard/profile">powrót do panelu</Link>;
    }
  };

  return (
    <>
      <Styled.NavWrapper>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <Styled.LinksWrapper>
          {userLinks()}
          <Switch />
        </Styled.LinksWrapper>
        <Styled.Burger onClick={() => setBurgerOpen(true)}>
          <Icon.FaBars />
        </Styled.Burger>
      </Styled.NavWrapper>
      <AnimatePresence>
        {burgerOpen && (
          <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
