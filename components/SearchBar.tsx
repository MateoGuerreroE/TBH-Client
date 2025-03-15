"use client";
import { Input } from "@heroui/react";
import Image from "next/image";
import React from "react";

type Props = {
  width: string;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
};

export default function SearchBar({
  width = "w-auto",
  size = "md",
  variant = "flat",
}: Props) {
  return (
    <Input
      placeholder="¿Qué producto estás buscando?..."
      radius="lg"
      size={size}
      variant={variant}
      className={`${width} font-poppins`}
      classNames={{
        inputWrapper: ["shadow-md", "shadow-black-300", "border-black"],
      }}
      startContent={
        <Image
          src="/icons/search.svg"
          alt="search_icon"
          width={20}
          height={20}
          className={`${variant === "bordered" ? "opacity-70" : "opacity-40"}`}
        />
      }
    />
  );
}
