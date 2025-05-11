"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type ButtonComponentProps = {
  label: string;
  image?: string;
  action?: () => void;
  size?: "sm" | "md" | "lg";
  redirectTo?: string;
  color?: "primary" | "secondary";
  custom?: string;
};

export default function ButtonComponent({
  label,
  color = "primary",
  image,
  action,
  size = "md",
  redirectTo,
  custom = "",
}: ButtonComponentProps) {
  const router = useRouter();
  return (
    <Button
      size={size}
      className={`${custom} min-w-10 font-semibold ${label.length < 2 || image ? "px-3" : "p-6"} text-medium ${color === "primary" ? "bg-[#017392] text-slate-50" : "bg-[#68c2dd] text-slate-800"}`}
      onPress={() => {
        if (redirectTo) router.push(redirectTo);
        if (action) action();
      }}
    >
      {label}
      {image && (
        <Image
          src={image}
          alt={`${image}_button_icon`}
          width={50}
          height={50}
          className="w-6"
        />
      )}
    </Button>
  );
}
