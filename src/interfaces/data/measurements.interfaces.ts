export interface IMeasurementData {
  _id: string;
  user: string;
  client: string;
  name: string;
  notes?: string;
  weight: number;
  height: number;
  pal: number;
  bmi: number;
  bmi_type: "niedowaga" | "norma" | "nadwaga" | "otyłość";
  ppm_mifflin: number;
  ppm_harris: number;
  whr?: number;
  whtr?: number;
  ymca?: number;
  cpm: number;
  //circuits
  chest_breath?: number;
  chest_exhaust?: number;
  shoulder?: number;
  shoulder_tonus?: number;
  waist?: number;
  hip?: number;
  forearm?: number;
  thigh?: number;
  calf?: number;
  createdAt: string;
  updatedAt: string;
  //lappets
  // biceps?: number;
  // triceps?: number;
  // shoulder_blade?: number;
  // ala_of_ilium?: number;
  // iliac_spine?: number;
}

export type IMeasurementBasicInfo = Pick<
  IMeasurementData,
  "name" | "client" | "notes"
>;
export type IBasicMesurement = Pick<
  IMeasurementData,
  "weight" | "height" | "pal"
>;
export type IAdditionalMesurement = Pick<
  IMeasurementData,
  | "chest_breath"
  | "chest_exhaust"
  | "shoulder"
  | "shoulder_tonus"
  | "waist"
  | "hip"
  | "forearm"
  | "thigh"
  | "calf"
  // | "biceps"
  // | "triceps"
  // | "shoulder_blade"
  // | "ala_of_ilium"
  // | "iliac_spine"
>;

export interface IPalInterface {
  _id: string;
  type: string;
  value: number;
}
