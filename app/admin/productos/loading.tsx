"use client";
import { Spinner } from "@heroui/react";
import React from "react";

export default function loading() {
  return (
    <div className="w-screen h-full py-32 flex items-center justify-center">
      <Spinner size="lg" label="Cargando..." />
    </div>
  );
}
