import React, { useState } from "react";
import { Input } from "@heroui/react";
import { validateInput } from "@/utils/validations";
import { InputValidation, InputVisualOptions } from "@/types/Form.types";

interface FormInputProps {
  options: InputVisualOptions;
  label: string;
  validations: InputValidation[];
  isValid: (valid: boolean) => void;
  parentState: (string: string) => void;
}

export default function FormInput({
  options,
  validations,
  label,
  isValid,
  parentState,
}: FormInputProps) {
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
    <Input
      fullWidth
      errorMessage={error}
      classNames={{
        input: "text-md",
      }}
      isInvalid={error !== ""}
      value={value}
      onValueChange={handleChange}
      label={label}
      placeholder={options.placeholder}
      required={options.isRequired}
      labelPlacement={options.type}
      type={options.isHidden ? "password" : "text"}
      variant={options.variant}
      description={options.description}
    />
  );
}
