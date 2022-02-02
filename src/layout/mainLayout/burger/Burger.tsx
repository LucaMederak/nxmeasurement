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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//context
import { useDarkMode } from "@context/darkMode";

//redux
import { State } from "@redux/reducers";
import { useSelector } from "react-redux";

const Burger = ({ setBurgerOpen }: IBurgerProps) => {
  const { darkMode } = useDarkMode();

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
        <li>
          <Skeleton
            {...skeletonDarkTheme}
            width={200}
            height={40}
            borderRadius={4}
          />
        </li>
      );
    }

    if (!user && !userLoading) {
      return (
        <>
          <li>
            <Link to="/auth/login">zaloguj się</Link>
          </li>
          <li>
            <Link to="/auth/register">załóż konto</Link>
          </li>
        </>
      );
    }
    if (user) {
      return (
        <li>
          <Link to="/dashboard/profile">powrót do panelu</Link>
        </li>
      );
    }
  };
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
          {userLinks()}
        </Styled.BurgerItems>
      </Styled.BurgerContent>
    </Styled.BurgerOverlay>
  );
};

export default Burger;
