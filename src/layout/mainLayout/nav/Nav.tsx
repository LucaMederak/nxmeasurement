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

//icons
import * as Icon from "@icons/icons";

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <Styled.NavWrapper>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <Styled.LinksWrapper>
          <Link to="/login">zaloguj się</Link>
          <Link to="/register">załóż konto</Link>
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
