import { IChildrenProps } from "@interfaces/childrenProps.interfaces";

export interface IButtonProps {
  children: IChildrenProps["children"];
  variant?: "primary" | "secondary" | "disabled";
  onClick?: () => void;
  width?: string;
  type?: "submit" | "button";
}
