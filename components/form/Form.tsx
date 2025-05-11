import React, { useEffect, useState } from "react";
import {
  addToast,
  Button,
  Form as FormComponent,
  Spinner,
} from "@heroui/react";
import { BooleanFormState, InputValues } from "@/types/Form.types";
import FormInput from "./FormInput";
import {
  initializeBooleanFormState,
  initializeStringFormState,
  isFormValid,
} from "@/utils/form";
import FormTextArea from "./FormTextArea";
interface FormProps<T> {
  submitText: string;
  inputs: InputValues[];
  submitAction: (value: T) => void | Promise<void>;
  defaultError?: string;
}

export default function Form<T>({
  inputs,
  submitAction,
  submitText,
}: FormProps<T>) {
  const [formValues, setFormValues] = useState<T>(
    initializeStringFormState(inputs)
  );
  const [formValidations, setFormValidations] = useState<BooleanFormState<T>>(
    initializeBooleanFormState(inputs)
  );
  const [formError, setFormError] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    isLoading(true);
    try {
      await submitAction(formValues);
    } catch (e) {
      if (e instanceof Error) {
        addToast({
          title: "Server error",
          description: (e.cause as string) || e.message,
          color: "warning",
        });
        let message = "Ha ocurrido un error. Intenta nuevamente";
        if (e.name === "ClientError") {
          message = e.message;
        }
        setFormError(message);
      }
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    setReady(isFormValid(formValidations));
  }, [formValidations]);

  return (
    <div className="relative w-full">
      {loading && (
        <div className="absolute w-full h-full flex items-center justify-center bg-white/60 z-[12]">
          <Spinner />
        </div>
      )}
      <FormComponent onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 w-full">
          {inputs.map((inputInfo, index) => {
            if (inputInfo.type === "textarea") {
              return (
                <FormTextArea
                  key={index}
                  label={inputInfo.label}
                  options={inputInfo.inputOptions}
                  validations={inputInfo.validations}
                  parentState={(val: string) =>
                    setFormValues({ ...formValues, [inputInfo.attribute]: val })
                  }
                  isValid={(valid: boolean) =>
                    setFormValidations({
                      ...formValidations,
                      [inputInfo.attribute]: valid,
                    })
                  }
                />
              );
            }
            return (
              <FormInput
                key={index}
                label={inputInfo.label}
                options={inputInfo.inputOptions}
                validations={inputInfo.validations}
                parentState={(val: string) =>
                  setFormValues({ ...formValues, [inputInfo.attribute]: val })
                }
                isValid={(valid: boolean) =>
                  setFormValidations({
                    ...formValidations,
                    [inputInfo.attribute]: valid,
                  })
                }
              />
            );
          })}
        </div>
        {formError.length ? (
          <p className="w-full text-center font-poppins text-sm text-red-500">
            {formError}
          </p>
        ) : (
          <></>
        )}
        <Button
          type="submit"
          isDisabled={!ready}
          className={`w-full font-semibold mt-3 ${ready ? "bg-[#68c2dd]" : ""}`}
        >
          {submitText}
        </Button>
      </FormComponent>
    </div>
  );
}
