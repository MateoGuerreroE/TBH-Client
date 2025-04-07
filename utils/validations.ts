import { InputValidation } from "@/types/Form.types";

export function validateInput(
  validations: InputValidation[],
  value: string,
  setError: (val: string) => void
): boolean {
  let validity = true;
  for (const validation of validations) {
    if (!validity) return false; // If any validation fails, return false immediately
    switch (validation.type) {
      case "regexp":
        validity = validation.regex.test(value);
        break;
      case "custom":
        validity = validation.validation(value);
        break;
      default:
        throw new Error(`Unknown validation type`);
    }
    if (!validity) {
      setError(validation.errorMessage);
    }
  }
  if (validity) {
    setError("");
  }
  return validity;
}
