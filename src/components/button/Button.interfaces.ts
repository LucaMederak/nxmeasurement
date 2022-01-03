import { IChildrenProps } from "@interfaces/childrenProps.interfaces";

export interface IButtonProps {
  children: IChildrenProps["children"];
  variant?:
    | "primary"
    | "secondary"
    | "disabled"
    | "data-primary"
    | "data-secondary"
    | "data-delete-primary"
    | "data-delete-secondary";
  onClick?: () => void;
  width?: string;
  type?: "submit" | "button";
}
