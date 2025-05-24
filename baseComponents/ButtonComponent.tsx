"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type ButtonVisualOpts = {
  color?: "primary" | "secondary";
  startingIcon?: string;
  bold?: boolean;
  isLoading?: boolean;
  endingIcon?: string;
  rounded?: "full" | "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonComponentProps = {
  label: string;
  disabled?: boolean;
  visualOpts?: ButtonVisualOpts;
  action?: (...args: unknown[]) => void | Promise<void>;
  redirectTo?: string;
};

export default function ButtonComponent({
  label,
  visualOpts,
  disabled = false,
  action,
  redirectTo,
}: ButtonComponentProps) {
  const router = useRouter();
  const {
    color = "primary",
    startingIcon,
    isLoading = false,
    bold = false,
    rounded = "lg",
    endingIcon,
    size = "md",
    className = "",
  } = visualOpts || {};
  return (
    <Button
      isDisabled={disabled}
      isLoading={isLoading}
      size={size}
      color={color}
      radius={rounded}
      startContent={
        startingIcon && (
          <Image
            src={startingIcon}
            alt={`${label}_starting_icon`}
            width={22}
            height={22}
          />
        )
      }
      endContent={
        endingIcon && (
          <Image
            src={endingIcon}
            alt={`${label}_ending_icon`}
            width={22}
            height={22}
          />
        )
      }
      className={`font-poppins ${bold ? "font-semibold" : "font-medium"} ${color === "primary" ? "text-slate-100" : "text-slate-800"} ${className}`}
      onPress={async () => {
        if (action) {
          try {
            await action();
            if (redirectTo) router.push(redirectTo);
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {label.length > 0 ? label : undefined}
    </Button>
  );
}
