import { TDataRows } from "@interfaces/dataGrid.interfaces";

export interface ICheckedPopupProps {
  checkedRows: TDataRows;
  deleteAction: () => void;
}
