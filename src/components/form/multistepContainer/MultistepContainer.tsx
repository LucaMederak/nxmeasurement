import React, { useState } from "react";

//formik
import { Formik, Form, FormikConfig, FormikValues } from "formik";

//interfaces
import { IFormikStepProps } from "./MultistepContainer.interfaces";

//styles
import * as Styled from "./MultistepContainer.styles";

//components
import Button from "@components/button/Button";

export const FormikStep = ({ children }: IFormikStepProps) => {
  return <Styled.FormikStepWrapper>{children}</Styled.FormikStepWrapper>;
};

export const FormikStepper = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<IFormikStepProps>[];

  const [step, setStep] = useState(0);

  const currentChild = childrenArray[
    step
  ] as React.ReactElement<IFormikStepProps>;

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
          helpers.setSubmitting(false);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting, dirty, isValid, values }) => (
        <Styled.FormWrapper autoComplete="off">
          {currentChild}
          <Styled.ButtonsWrapper>
            {step > 0 && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep((s) => s - 1)}
              >
                Wstecz
              </Button>
            )}

            <Button
              type="submit"
              variant={isSubmitting ? "disabled" : "primary"}
            >
              {isLastStep() ? "Wyślij" : "Dalej"}
            </Button>
          </Styled.ButtonsWrapper>

          <Styled.FormStepper>
            {childrenArray.map((child) => (
              <Styled.FormStep
                activeStep={currentChild.props.label === child.props.label}
                key={child.props.label}
              ></Styled.FormStep>
            ))}
          </Styled.FormStepper>
        </Styled.FormWrapper>
      )}
    </Formik>
  );
};
