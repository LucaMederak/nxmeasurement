import { IPopupProps } from "../PopupContainer.interfaces";

export interface IDeletePopupProps extends Omit<IPopupProps, "children"> {
  itemName: string;
  action: () => void;
}
