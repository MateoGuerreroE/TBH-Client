"use client";
import React from "react";

type Props = {
  action?: (...args: string[]) => unknown;
  label: string;
  font: string;
};

export default function SelectOption({ action, label, font }: Props) {
  return (
    <a
      className={`no-underline hover:cursor-pointer text-medium hover:scale-105 transition-transform duration-100 ${font}`}
      onClick={() => action && action()}
    >
      {label}
    </a>
  );
}
