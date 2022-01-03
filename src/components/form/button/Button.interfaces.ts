import { IChildrenProps } from "@/interfaces/children.interfaces";
import { ReactElement } from "react";

export interface IButtonProps {
  children: IChildrenProps["children"];
  variant?: "primary" | "secondary" | "disabled";
  onClick?: () => void;
  width?: string;
  type?: "submit" | "button";
}
