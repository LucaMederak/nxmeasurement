import React from "react";
import * as Styled from "./Sidebar.styles";
import { useNavigate, useLocation } from "react-router-dom";

//context
import { useSidebarView } from "@context/sidebarView";
import { useDarkMode } from "@context/darkMode";

//icons
import * as Icon from "@icons/icons";

//page links
import { dashboardLinks } from "@utils/dashboardLinks";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { sidebarView, changeSidebarView } = useSidebarView();
  const { darkMode } = useDarkMode();

  return (
    <Styled.SidebarContainer darkMode={darkMode}>
      <Styled.SidebarNav
        onClick={changeSidebarView as any}
        sidebarView={sidebarView}
      >
        <Styled.SidebarItemBox>
          <Icon.FaChevronRight />
        </Styled.SidebarItemBox>
      </Styled.SidebarNav>
      <Styled.SidebarList sidebarView={sidebarView} darkMode={darkMode}>
        {dashboardLinks.map(({ name, link, icon }) => (
          <Styled.SidebarItem
            key={name}
            onClick={() => navigate(link)}
            activeNavLink={location.pathname.includes(link)}
          >
            <Styled.SidebarItemBox>{icon}</Styled.SidebarItemBox>
            <a>{name}</a>
          </Styled.SidebarItem>
        ))}
      </Styled.SidebarList>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
