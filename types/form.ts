import { ReactNode } from "react";

export type ValidationFunction = (value: string) => boolean;

export type FormValidations = {
  exec: ValidationFunction;
  message: string;
};

export type FormFieldMap<T> = {
  [K in keyof T]: FormInput<T>;
};

export interface IBaseFieldInput<T> {
  key: keyof T & string;
  name: string;
  required: boolean;
}

export type FormInput<T> = FormInputField<T> | FormSelectField<T>;

export interface FormActionResponse<T> {
  isSuccess: boolean;
  data: T | null;
}

export interface FormInputField<T> extends IBaseFieldInput<T> {
  inputType: "input";
  validations: FormValidations[];
  type?: "text" | "email" | "password" | "number";
  inputOpts?: {
    startContent?: ReactNode;
    endContent?: ReactNode;
    labelPlacement?: "outside" | "outside-left" | "inside";
    radius?: "sm" | "md" | "lg" | "xl" | "full";
    description?: string;
    variant?: "flat" | "bordered" | "underlined" | "faded";
  };
}

export interface SelectOpt {
  value: string;
  label: string;
}

export interface FormSelectField<T> extends IBaseFieldInput<T> {
  inputType: "select";
  options: SelectOpt[];
}

export interface CustomFormData<T> {
  fields: FormFieldMap<T>;
  submitText: string;
}

export interface ExecAction<R> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trigger: (...params: any[]) => Promise<FormActionResponse<R>>;
  successMessage: string;
  failureMessage: string;
}
