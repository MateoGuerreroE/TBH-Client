export interface InputValues {
  validations: InputValidation[];
  attribute: string;
  label: string;
  type?: "input" | "textarea";
  inputOptions: InputVisualOptions;
}

type RegexpValidation = {
  type: "regexp";
  regex: RegExp;
  errorMessage: string;
};

export type BooleanFormState<T> = Record<keyof T, boolean>;

export type CustomValidation = {
  type: "custom";
  validation: (value: string) => boolean;
  errorMessage: string;
};

export type InputValidation = RegexpValidation | CustomValidation;

export type InputVisualOptions = {
  isRequired: boolean;
  placeholder?: string;
  isHidden?: boolean;
  description?: string;
  visualType?: "inside" | "outside-left";
  variant?: "bordered" | "underlined" | "faded" | "flat";
};
