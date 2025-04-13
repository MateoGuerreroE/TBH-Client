"use client";
import { Card } from "@heroui/react";
import shine from "./styles/ShineEffect.module.css";

type CategoryCardProps = {
  img: string;
  name: string;
  color: string;
};

export default function CategoryCard({ name, color }: CategoryCardProps) {
  return (
    <div className={`w-full h-full ${shine.shine} shadow-lg`}>
      <Card
        className={`border-none aspect-[2/1] w-full h-full overflow-hidden`}
        radius="lg"
        style={{ backgroundColor: color }}
        key={`${name}_card`}
      >
        <div className="p-1 xs:p-3 sm:p-5 md:max-w-[90%] self-center w-full h-full flex flex-row justify-between items-center gap-2">
          <h5 className="w-full xs:max-w-[80%] font-poppins text-center text-xs xs:text-left xs:text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold">
            {name}
          </h5>
        </div>
      </Card>
    </div>
  );
}
