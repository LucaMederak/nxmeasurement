import { TAvailableColumns, TDataRows } from "@interfaces/dataGrid.interfaces";

export interface IDataGridProps {
  availableColumns: TAvailableColumns;
  dataRows: TDataRows;
  loading: boolean;
  linkPage: string;
  deleteAction: () => void;
}
