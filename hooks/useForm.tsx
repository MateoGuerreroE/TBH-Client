import React from "react";
import SubmitButton from "@/components/SubmitButton";
import { addToast, Divider, Input, Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import {
  CustomFormData,
  ExecAction,
  FormInput,
  FormValidations,
} from "@/types/form";

export function useForm<T, R>(
  formData: CustomFormData<T>,
  execute: ExecAction<R>
): {
  FormComponent: () => React.JSX.Element;
} {
  const initialState = Object.keys(formData.fields).reduce(
    (acc, key) => {
      acc[key as keyof T] = "";
      return acc;
    },
    {} as Record<keyof T, string>
  ) as T;

  function FormComponent(): React.JSX.Element {
    const [form, setForm] = useState<T>(initialState);
    const [errors, setErrors] = useState<T>(initialState);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [actionError, setActionError] = useState<string>("");

    const invalidFormValidation = (): boolean => {
      for (const key in form) {
        if (form[key] === "") return true;
      }
      for (const key in errors) {
        if (errors[key] !== "") return true;
      }
      return false;
    };

    const validateErrors = (
      val: string,
      validations: FormValidations[]
    ): string => {
      for (const validation of validations) {
        if (!validation.exec(val)) {
          return validation.message;
        }
      }
      return "";
    };

    const validateField = (
      value: string,
      key: keyof T,
      validations: FormValidations[]
    ) => {
      setErrors((prev) => ({
        ...prev,
        [key]: validateErrors(value, validations),
      }));
      setForm((prev) => ({ ...prev, [key]: value }));
    };

    const formAction = async () => {
      setLoading(true);
      const response = await execute.trigger(form);
      setLoading(false);
      if (response.isSuccess) {
        addToast({ title: execute.successMessage, color: "success" });
      } else {
        setActionError(execute.failureMessage);
      }
    };

    return (
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          formAction();
        }}
      >
        {Object.values<FormInput<T>>(formData.fields).map((field) => {
          switch (field.inputType) {
            case "input":
              return (
                <Input
                  type={field.type || "text"}
                  key={field.key}
                  label={field.name}
                  labelPlacement={field.inputOpts?.labelPlacement || "inside"}
                  value={form[field.key] as string}
                  description={field.inputOpts?.description}
                  onValueChange={(e) =>
                    validateField(e, field.key, field.validations)
                  }
                  endContent={field.inputOpts?.endContent}
                  required={field.required}
                  isInvalid={errors[field.key] !== ""}
                  errorMessage={errors[field.key] as string}
                  variant={field.inputOpts?.variant || "flat"}
                />
              );
            case "select":
              return (
                <Select
                  key={field.key}
                  label={field.name}
                  classNames={{ popoverContent: "dark" }}
                  onChange={(e) =>
                    setForm({ ...form, [field.key]: e.target.value })
                  }
                >
                  {field.options.map((opt) => (
                    <SelectItem key={opt.value} className="text-white">
                      {opt.label}
                    </SelectItem>
                  ))}
                </Select>
              );
            default:
              return null;
          }
        })}
        <Divider className="h-0 py-1 bg-transparent" />
        <SubmitButton
          loading={isLoading}
          text={formData.submitText}
          disabled={invalidFormValidation()}
        />
        {actionError && (
          <p
            style={{ color: "red" }}
            className="text-center font-mulish text-sm"
          >
            {actionError}
          </p>
        )}
      </form>
    );
  }

  return { FormComponent };
}
