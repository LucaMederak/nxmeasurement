export interface IDataPopupProps {
  options: {
    [key: string]: string;
  }[];
  optionLabel: string;
  optionRender: string;
  disabledItem: boolean;
  handleChange: (value: string) => void;
}
