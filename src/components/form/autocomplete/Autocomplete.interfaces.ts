export type TOptions = {
  [key: string]: string;
};

export interface IAutocompleteProps {
  name: string;
  label: string;
  options: TOptions[];
  optionLabel: string;
  formOptionRender?: string;
  width?: string;
}
