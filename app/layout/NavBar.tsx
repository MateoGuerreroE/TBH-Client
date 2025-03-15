"use client";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex flex-col w-full">
      <div className="flex justify-center w-full bg-[#017392] shadow-lg">
        <div className="flex flex-row max-w-[1400px] w-full">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={210}
            height={100}
            className="p-5 mx-10"
          />
          <div className="w-full flex items-center justify-center">
            <SearchBar width="w-[50%]" size="lg" />
          </div>
        </div>
      </div>
    </nav>
  );
}
