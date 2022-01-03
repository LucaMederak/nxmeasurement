import React from "react";
import { Link } from "react-router-dom";

//styles
import * as Styled from "./Burger.styles";

//icons
import * as Icon from "@icons/icons";

//interfaces
import { IBurgerProps } from "./Burger.interfaces";

//animations
import { burgerAnimations } from "./Burger.animations";

//components
import Switch from "@components/switch/Switch";

const Burger = ({ setBurgerOpen }: IBurgerProps) => {
  return (
    <Styled.BurgerOverlay
      variants={burgerAnimations}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Styled.BurgerContent>
        <Styled.Close onClick={() => setBurgerOpen(false)}>
          <Icon.FaTimes />
        </Styled.Close>
        <Styled.BurgerItems>
          <li>
            Motyw
            <Switch />
          </li>
          <li>
            <Link to="/login">zaloguj się</Link>
          </li>
          <li>
            <Link to="/register">załóż konto</Link>
          </li>
        </Styled.BurgerItems>
      </Styled.BurgerContent>
    </Styled.BurgerOverlay>
  );
};

export default Burger;
