import { Input } from "@heroui/react";
import Image from "next/image";
import React from "react";

export type SearchBarProps = {
  width: string;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
};

export default function SearchBar({ width, size, variant }: SearchBarProps) {
  return (
    <Input
      placeholder="¿Qué estás buscando?"
      radius="lg"
      size={size}
      variant={variant}
      className={`${width} front-poppins`}
      classNames={{
        inputWrapper: ["shadow-md", "shadow-black-300", "border-black"],
      }}
      endContent={
        <Image
          src="/icons/search.svg"
          alt="search_icon"
          width={20}
          height={20}
          className={`${variant === "bordered" ? "opacity-70" : "opacity-40"} hover:cursor-pointer`}
        />
      }
    />
  );
}
