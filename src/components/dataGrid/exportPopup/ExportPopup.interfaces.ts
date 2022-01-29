import { TAvailableColumns, TDataRows } from "@interfaces/dataGrid.interfaces";

export interface IExportPopupProps {
  dataRows: TDataRows;
  availableColumns: TAvailableColumns;
  setExportPopupDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IExportPopupStylesProps {
  variant: "csv" | "pdf";
}
