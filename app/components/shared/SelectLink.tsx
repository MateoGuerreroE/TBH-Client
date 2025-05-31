import Link from "next/link";
import React from "react";

type SelectLinkProps = {
  uri?: string;
  label: string;
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  customClass?: string;
};

export default function SelectLink({
  uri = "#",
  label,
  fontSize = "md",
  customClass,
}: SelectLinkProps) {
  return (
    <Link href={uri} className={`text-${fontSize} lg:text-md ${customClass}`}>
      {label}
    </Link>
  );
}
