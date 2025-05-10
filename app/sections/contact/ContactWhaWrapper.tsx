"use client";
import Image from "next/image";
import React from "react";

export default function ContactWhaWrapper() {
  return (
    <div
      className="flex flex-rows gap-3 items-center hover:cursor-pointer hover:scale-105 transition-all duration-200"
      onClick={() => window.open("https://wa.me/573115801692", "_blank")}
    >
      <Image
        src="/icons/wha-black.svg"
        alt="wha_icon"
        width={100}
        height={100}
        className="w-12 h-12"
      />
      <p className="font-semibold">+57 311 580 1692</p>
    </div>
  );
}
