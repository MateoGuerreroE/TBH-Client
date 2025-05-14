"use client";
import { Card } from "@heroui/react";
import shine from "@/baseComponents/styles/ShineEffect.module.css";
import Image from "next/image";

type CategoryCardProps = {
  img: string;
  name: string;
  color?: string;
};

export default function CategoryCard({
  name,
  img,
  color = "#ffffff",
}: CategoryCardProps) {
  return (
    <div className={`w-full h-full ${shine.shine} shadow-lg`}>
      <Card
        className={`border-none relative  aspect-[2/1] w-full h-full overflow-hidden hover:contrast-125`}
        radius="lg"
        style={{ backgroundColor: color }}
        key={`${name}_card`}
      >
        <Image
          src={img}
          alt={`${name}_image`}
          width={1000}
          height={500}
          className="absolute w-full h-full object-cover"
        />
        <div className=" p-1 xs:p-3 sm:p-5 md:max-w-[90%] self-center w-full h-full flex flex-row justify-between items-center gap-2">
          <h5 className="w-full xs:max-w-[70%]  font-poppins text-center text-xs xs:text-left xs:text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold">
            {name}
          </h5>
        </div>
      </Card>
    </div>
  );
}
