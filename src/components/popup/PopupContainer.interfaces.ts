import { IChildrenProps } from "@interfaces/childrenProps.interfaces";

export interface IPopupProps {
  children: IChildrenProps["children"];
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
