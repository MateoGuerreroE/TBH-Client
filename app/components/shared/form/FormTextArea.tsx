import { InputValidation, InputVisualOptions } from "@/types/Form.types";
import { validateInput } from "@/utils/validations";
import { Textarea } from "@heroui/react";
import { useState } from "react";

interface FormTextAreaProps {
  options: InputVisualOptions;
  label: string;
  validations: InputValidation[];
  isValid: (valid: boolean) => void;
  parentState: (string: string) => void;
}

export default function FormTextArea({
  options,
  validations,
  label,
  isValid,
  parentState,
}: FormTextAreaProps) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (value: string) => {
    setValue(value);
    if (validateInput(validations, value, setError)) {
      isValid(true);
      parentState(value);
    } else {
      isValid(false);
    }
  };

  return (
    <Textarea
      fullWidth
      errorMessage={error}
      classNames={{
        input: "text-md",
        inputWrapper: "bg-slate-50",
      }}
      isInvalid={error !== ""}
      value={value}
      isRequired={options.isRequired}
      onValueChange={handleChange}
      label={label}
      placeholder={options.placeholder}
      required={options.isRequired}
      labelPlacement={options.visualType}
      type={options.isHidden ? "password" : "text"}
      variant={options.variant}
      description={options.description}
    />
  );
}
