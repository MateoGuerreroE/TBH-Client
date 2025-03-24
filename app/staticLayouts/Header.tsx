"use client";

import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col w-full relative z-50">
      <div className="flex justify-center w-full bg-[#017392] shadow-lg">
        <div className="flex flex-row max-w-[1400px] w-full">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={210}
            height={210}
            className="m-5 mx-2 h-10 md:h-16 2xl:h-20"
          />
          <div className="w-full flex items-center justify-center px-3 md:px-0">
            <SearchBar width="w-full md:w-[60%] lg:w-[50%]" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
