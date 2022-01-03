import React, { useRef, useEffect, useState } from "react";
import * as Styled from "./Nav.styles";
import { useLocation, useNavigate } from "react-router-dom";

//images
import Logo from "@assets/logo-icon.svg";

//components
import IconButton from "@components/iconButton/IconButton";

//icons
import * as Icon from "@icons/icons";

//redux
import { logout } from "@redux/user/user.actions";
import { useDispatch } from "react-redux";

import { dashboardLinks } from "@utils/dashboardLinks";

import Switch from "@components/switch/Switch";
import { AnimatePresence } from "framer-motion";

//animations
import { navAnimations } from "./Nav.animations";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [activeLinksPopup, setActiveLinksPopup] = useState(false);

  //current location
  const route = dashboardLinks.find(({ link }) =>
    location.pathname.includes(link)
  );

  const [activeRoute, setActiveRoute] = useState(route);

  const handleDashboardItemClick = (activeLink: string) => {
    const route = dashboardLinks.find(({ link }) => link === activeLink);
    navigate(activeLink);
    setActiveLinksPopup(false);
    setActiveRoute(route);
  };

  //logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Styled.NavContainer>
      <Styled.NavWrapper>
        <Styled.NavItemBox>
          <img src={Logo} />
        </Styled.NavItemBox>
        <Styled.NavUtilsWrapper>
          <Switch />
          <IconButton onClick={handleLogout}>
            <Icon.FaSignOutAlt />
          </IconButton>
        </Styled.NavUtilsWrapper>
      </Styled.NavWrapper>
      <Styled.DashboardLinksContainer>
        <Styled.DashboardLinkActiveItem>
          <div>
            {activeRoute?.icon}
            <p>{activeRoute?.name}</p>
          </div>
          <Styled.NavItemBox
            onClick={() => setActiveLinksPopup(!activeLinksPopup)}
            activeLinksPopup={activeLinksPopup}
          >
            <Icon.FaChevronDown />
          </Styled.NavItemBox>
        </Styled.DashboardLinkActiveItem>
        <AnimatePresence>
          {activeLinksPopup && (
            <Styled.DashboardLinks
              variants={navAnimations}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {dashboardLinks
                .filter(({ link }) => link !== activeRoute?.link)
                .map(({ name, icon, link }) => (
                  <Styled.DashboardLinkItem
                    key={link}
                    onClick={() => handleDashboardItemClick(link)}
                  >
                    <Styled.NavItemBox>{icon}</Styled.NavItemBox>
                    <a>{name}</a>
                  </Styled.DashboardLinkItem>
                ))}
            </Styled.DashboardLinks>
          )}
        </AnimatePresence>
      </Styled.DashboardLinksContainer>
    </Styled.NavContainer>
  );
};

export default Nav;
