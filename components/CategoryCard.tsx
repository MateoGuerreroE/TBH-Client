"use client";
import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import shine from "./styles/ShineEffect.module.css";

type CategoryCardProps = {
  img: string;
  name: string;
};

export default function CategoryCard({ img, name }: CategoryCardProps) {
  return (
    <div className={`w-full h-full ${shine.shine}`}>
      <Card
        className={`bg-slate-200 border-none aspect-[3/1] w-full h-full overflow-hidden`}
        radius="lg"
        key={`${name}_card`}
      >
        <div className="p-1 xs:p-3 sm:p-5 md:max-w-[90%] self-center w-full h-full flex flex-row justify-between items-center gap-2">
          <h5 className="w-full xs:max-w-[80%] font-poppins text-center text-xs xs:text-left xs:text-[16px] sm:text-xl font-bold">
            {name}
          </h5>
          <Image
            src={img}
            alt={`${name}_icon`}
            width={500}
            height={500}
            className="hidden xs:block h-7 w-7 sm:h-10 sm:w-10"
          />
        </div>
      </Card>
    </div>
  );
}
