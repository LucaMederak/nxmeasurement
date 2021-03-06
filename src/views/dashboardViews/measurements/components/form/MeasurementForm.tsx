import React from "react";

//components
import {
  FormikStep,
  FormikStepper,
} from "@components/form/multistepContainer/MultistepContainer";

import TextField from "@components/form/textField/TextField";
import Autocomplete from "@components/form/autocomplete/Autocomplete";
import Textarea from "@components/form/textarea/Textarea";

//styles
import * as Styled from "./MeasurementForm.styles";

//icons
import * as Icon from "@icons/icons";

//schema
import {
  FORM_BASIC_INFO_VALIDATION_SCHEMA,
  FORM_BASIC_MEASUREMENT_VALIDATION_SCHEMA,
  FORM_ADDITIONAL_MEASUREMENT_VALIDATION_SCHEMA,
} from "./MeasurementForm.schema";

//interfaces
import { IFormProps } from "./MeasurementForm.interfaces";

//data
import { pal } from "@utils/pal";

const NewMeasurementForm = ({
  clients,
  initialValues,
  handleSubmit,
}: IFormProps) => {
  return (
    <FormikStepper
      initialValues={{
        ...initialValues,
      }}
      onSubmit={handleSubmit as any}
    >
      <FormikStep
        validationSchema={FORM_BASIC_INFO_VALIDATION_SCHEMA}
        label="basic-info"
      >
        <Styled.FormHeading>
          <span>
            <Icon.FaFileAlt />
          </span>
          <h2>Informacje o pomiarze</h2>
        </Styled.FormHeading>

        <Styled.FieldsWrapper>
          <TextField
            name="name"
            type="text"
            label="Nazwa"
            aria-label="name"
            width="40rem"
          />

          <Autocomplete
            name="client"
            label="Klient"
            options={clients as any}
            formOptionRender="_id"
            optionLabel="client"
            width="40rem"
          />

          <Textarea name="notes" label="Notatki" aria-label="notes" />
        </Styled.FieldsWrapper>
      </FormikStep>
      <FormikStep
        validationSchema={FORM_BASIC_MEASUREMENT_VALIDATION_SCHEMA}
        label="basic-measurement"
      >
        <Styled.FormHeading>
          <span>
            <Icon.FaWeight />
          </span>
          <h2>Podstawowe dane pomiaru</h2>
        </Styled.FormHeading>

        <Styled.FieldsWrapper>
          <TextField
            name="weight"
            type="number"
            label="Masa cia??a (kg)"
            aria-label="weight"
            width="40rem"
          />
          <TextField
            name="height"
            type="number"
            label="Wysoko???? cia??a (cm)"
            aria-label="height"
            width="40rem"
          />
          <Autocomplete
            name="pal"
            label="Wsp????czynnik aktywno??ci fizycznej (PAL)"
            options={pal as any}
            optionLabel="value"
            formOptionRender="value"
            width="40rem"
          />
        </Styled.FieldsWrapper>
      </FormikStep>
      <FormikStep
        validationSchema={FORM_ADDITIONAL_MEASUREMENT_VALIDATION_SCHEMA}
        label="additional-measurement"
      >
        <Styled.FormHeading>
          <span>
            <Icon.FaFileInvoice />
          </span>
          <h2>Dodatkowe dane pomiaru</h2>
        </Styled.FormHeading>

        <Styled.FieldsWrapper>
          <TextField
            name="chest_breath"
            type="number"
            label="Obw??d klatki piersiowej we wdechu (cm)"
            aria-label="chest_breath"
            width="40rem"
          />
          <TextField
            name="chest_exhaust"
            type="number"
            label="Obw??d klatki piersiowej w wydechu (cm)"
            aria-label="chest_exhaust"
            width="40rem"
          />
          <TextField
            name="shoulder"
            type="number"
            label="Obw??d ramienia (cm)"
            aria-label="shoulder"
            width="40rem"
          />
          <TextField
            name="shoulder_tonus"
            type="number"
            label="Obw??d ramienia w napi??ciu (cm)"
            aria-label="shoulder_tonus"
            width="40rem"
          />
          <TextField
            name="waist"
            type="number"
            label="Obw??d talii (cm)"
            aria-label="waist"
            width="40rem"
          />
          <TextField
            name="hip"
            type="number"
            label="Obw??d bioder (cm)"
            aria-label="hip"
            width="40rem"
          />
          <TextField
            name="forearm"
            type="number"
            label="Obw??d przedramienia (cm)"
            aria-label="forearm"
            width="40rem"
          />
          <TextField
            name="thigh"
            type="number"
            label="Obw??d uda (cm)"
            aria-label="thigh"
            width="40rem"
          />
          <TextField
            name="calf"
            type="number"
            label="Obw??d ??ydki (cm)"
            aria-label="calf"
            width="40rem"
          />
        </Styled.FieldsWrapper>
        {/* <TextField
          name="biceps"
          type="number"
          label="Grubo???? fa??du sk??rno-t??uszczowego nad bicepsem (cm)"
          aria-label="biceps"
          width="40rem"
        />
        <TextField
          name="triceps"
          type="number"
          label="Grubo???? fa??du sk??rno-t??uszczowego nad tricepsem (cm)"
          aria-label="triceps"
          width="40rem"
        />
        <TextField
          name="shoulder_blade"
          type="number"
          label="Grubo???? fa??du sk??rno-t??uszczowego pod dolnym k??tem ??opatki (cm)"
          aria-label="shoulder_blade"
          width="40rem"
        />
        <TextField
          name="ala_of_ilium"
          type="number"
          label="Grubo???? fa??du sk??rno-t??uszczowego nad talerzem biodrowym (cm)"
          aria-label="shoulder_blade"
          width="40rem"
        />
        <TextField
          name="iliac_spine"
          type="number"
          label="Grubo???? fa??du sk??rno-t??uszczowego nad kolcem biodrowym przednim g??rnym (cm)"
          aria-label="iliac_spine"
          width="40rem"
        /> */}
      </FormikStep>
    </FormikStepper>
  );
};

export default NewMeasurementForm;
