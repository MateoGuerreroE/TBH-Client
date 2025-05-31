"use client";
import { Spinner } from "@heroui/react";

export default function LoadingComponent() {
  return (
    <div className="absolute z-20 w-full h-full flex items-center justify-center bg-white/20">
      <Spinner />
    </div>
  );
}
