"use client";
import { InputVisualOptions } from "@/types/Form.types";
import { Select, SelectItem } from "@heroui/react";
import type { Selection } from "@heroui/react";
import { useState } from "react";

type FormSelectProps = {
  selections: string[];
  options: InputVisualOptions;
  label: string;
  isValid: (valid: boolean) => void;
  parentState: (string: string) => void;
};

export default function FormSelect({
  selections,
  options,
  label,
  isValid,
  parentState,
}: FormSelectProps) {
  const [value, setValue] = useState<Selection>(new Set([]));

  const handleChange = (value: Selection) => {
    setValue(value);
    const current = Array.from(value)[0];
    const selectedValue = current?.toString() || "";
    if (selectedValue === "") {
      isValid(false);
    } else {
      isValid(true);
    }
    parentState(selectedValue);
  };

  return (
    <Select
      classNames={{
        value: "text-md",
        trigger: ["bg-slate-50", "text-md"],
      }}
      key={`select_${label}`}
      label={label}
      variant={options.variant}
      isRequired={options.isRequired}
      onSelectionChange={handleChange}
      selectedKeys={value}
    >
      {selections.map((selection) => (
        <SelectItem key={selection}>{selection}</SelectItem>
      ))}
    </Select>
  );
}
