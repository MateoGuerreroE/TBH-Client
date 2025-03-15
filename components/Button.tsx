import React from "react";
import { Button as ButtonComponent } from "@heroui/button";

type Props = {
  text: string;
  isUnfocused?: boolean;
};

export default function Button({ text, isUnfocused = false }: Props) {
  return (
    <ButtonComponent
      className={`font-poppins bg-white ${isUnfocused ? "bg-opacity-50 font-normal" : "font-semibold"} p-6`}
      radius="full"
    >
      {text}
    </ButtonComponent>
  );
}
