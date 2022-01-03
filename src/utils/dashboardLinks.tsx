import React from "react";
import * as Icon from "@icons/icons";

export const dashboardLinks = [
  {
    name: "Profil",
    link: "/dashboard/profile",
    icon: <Icon.FaUser />,
  },
  {
    name: "Klienci",
    link: "/dashboard/clients",
    access: ["dietician"],
    icon: <Icon.FaUsers />,
    subPage: [
      {
        name: "Nowy pacjent",
        link: "/clients/new",
        icon: <Icon.FaUserPlus />,
      },
      {
        name: "Edytuj pacjenta",
        link: "/clients/edit",
        icon: <Icon.FaEdit />,
      },
    ],
  },

  {
    name: "Pomiary",
    link: "/dashboard/measurements",
    icon: <Icon.FaClipboard />,
  },
];
