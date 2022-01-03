//validation
import { SchemaOf, object, string, number } from "yup";

//types
import {
  IMeasurementBasicInfo,
  IBasicMesurement,
  IAdditionalMesurement,
} from "@interfaces/data/measurements.interfaces";

export const FORM_BASIC_INFO_VALIDATION_SCHEMA: SchemaOf<IMeasurementBasicInfo> =
  object().shape({
    name: string().required("To pole jest wymagane"),
    client: string().required("To pole jest wymagane"),
    notes: string(),
  });

export const FORM_BASIC_MEASUREMENT_VALIDATION_SCHEMA: SchemaOf<IBasicMesurement> =
  object().shape({
    weight: number()
      .positive("Niewłaściwa wartość")
      .required("To pole jest wymagane"),
    height: number()
      .positive("Niewłaściwa wartość")
      .required("To pole jest wymagane"),
    pal: number()
      .positive("Niewłaściwa wartość")
      .required("To pole jest wymagane"),
  });

export const FORM_ADDITIONAL_MEASUREMENT_VALIDATION_SCHEMA: SchemaOf<IAdditionalMesurement> =
  object().shape({
    chest_breath: number().min(0, "Niewłaściwa wartość"),
    chest_exhaust: number().min(0, "Niewłaściwa wartość"),
    shoulder: number().min(0, "Niewłaściwa wartość"),
    shoulder_tonus: number().min(0, "Niewłaściwa wartość"),
    waist: number().min(0, "Niewłaściwa wartość"),
    hip: number().min(0, "Niewłaściwa wartość"),
    forearm: number().min(0, "Niewłaściwa wartość"),
    thigh: number().min(0, "Niewłaściwa wartość"),
    calf: number().min(0, "Niewłaściwa wartość"),
    // biceps: number().min(0.1, "Niewłaściwa wartość"),
    // triceps: number().min(0.1, "Niewłaściwa wartość"),
    // shoulder_blade: number().min(0.1, "Niewłaściwa wartość"),
    // ala_of_ilium: number().min(0.1, "Niewłaściwa wartość"),
    // iliac_spine: number().min(0.1, "Niewłaściwa wartość"),
  });
