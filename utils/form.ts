import { BooleanFormState, InputValues } from "@/types/Form.types";

export function initializeStringFormState<T>(inputs: InputValues[]): T {
  const initialState: Record<string, string> = {};
  inputs.forEach((input) => {
    initialState[input.attribute] = ""; // Initialize with empty string or default value
  });
  return initialState as T;
}

export function initializeBooleanFormState<T>(
  inputs: InputValues[]
): BooleanFormState<T> {
  const initialState: Record<string, boolean> = {};
  inputs.forEach((input) => {
    initialState[input.attribute] = input.inputOptions.isRequired
      ? false
      : true;
  });
  return initialState as BooleanFormState<T>;
}

export const isFormValid = (formValues: Record<string, boolean>) => {
  for (const key in formValues) {
    if (formValues[key] === false) {
      return false;
    }
  }
  return true;
};
