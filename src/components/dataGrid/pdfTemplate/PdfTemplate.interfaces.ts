import { IAvailableColumn, IDataRow } from "@interfaces/dataGrid.interfaces";

export interface IPdfDoc {
  columns: IAvailableColumn[];
  data: IDataRow[];
}
