export interface IDataGridNavProps {
  query: string;
  data: object[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setExportPopupDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  linkPage: string;
}
