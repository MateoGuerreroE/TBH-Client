import { Input } from "@heroui/react";
import Image from "next/image";
import React from "react";

export type SearchBarProps = {
  width: string;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
};

export default function SearchBar({ width, size, variant }: SearchBarProps) {
  const wrapperStyles = ["shadow-md", "shadow-black-300", "border-slate-100"];
  if (variant === "bordered") {
    wrapperStyles.push("text-slate-100");
  }
  return (
    <Input
      placeholder="¿Qué estás buscando?"
      radius="lg"
      size={size}
      variant={variant}
      className={`${width} front-poppins`}
      classNames={{
        inputWrapper: wrapperStyles,
        input: variant === "bordered" ? ["placeholder:text-slate-100/70"] : "",
      }}
      endContent={
        <Image
          src={
            variant === "bordered"
              ? "/icons/search_white.svg"
              : "/icons/search.svg"
          }
          alt="search_icon"
          width={20}
          height={20}
          className={`${variant === "bordered" ? "opacity-70" : "opacity-40"} hover:cursor-pointer`}
        />
      }
    />
  );
}
