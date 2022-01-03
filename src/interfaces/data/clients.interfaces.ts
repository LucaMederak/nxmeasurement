export interface IClientsData {
  _id: string;
  name: string;
  last_name: string;
  age: number;
  sex: "kobieta" | "mężczyzna";
  email?: string;
}
