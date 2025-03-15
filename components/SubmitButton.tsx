import { Button } from "@heroui/react";
import React from "react";

export default function SubmitButton({
  text,
  loading,
  disabled = false,
}: {
  loading: boolean;
  text: string;
  disabled?: boolean;
}) {
  return (
    <Button
      fullWidth
      isDisabled={disabled}
      isLoading={loading}
      color="primary"
      size="lg"
      type="submit"
    >
      {text}
    </Button>
  );
}
