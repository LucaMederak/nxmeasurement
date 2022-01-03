import React, { createContext, useContext, FC, useState, useMemo } from "react";

type SidebarView = boolean;

interface ISidebarView {
  sidebarView: SidebarView;
  changeSidebarView: (sidebarView: SidebarView) => void;
}

const SidebarViewContext = createContext<ISidebarView | null>(null);

export const useSidebarView = () => {
  const sidebarView = useContext(SidebarViewContext);
  if (!sidebarView) {
    throw new Error("SidebarView is not available");
  }
  return sidebarView;
};

export const SidebarViewProvider: FC = ({ children }) => {
  const [view, setView] = useState<SidebarView>(false);

  const contextValue = useMemo(
    () => ({ sidebarView: view, changeSidebarView: () => setView(!view) }),
    [view, setView]
  );

  return (
    <SidebarViewContext.Provider value={contextValue}>
      {children}
    </SidebarViewContext.Provider>
  );
};
