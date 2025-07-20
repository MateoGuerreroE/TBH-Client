"use client";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import { IProductRecord } from "tbh-shared-types";
import { formatPrice } from "@/utils";
import { Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { useNPStore } from "../../context/zustand";

type TrendCarProps = {
  product: IProductRecord;
};

export default function TrendCard({ product }: TrendCarProps) {
  const [descVisible, isDescVisible] = useState<boolean>(false);
  const { addToCart } = useNPStore();
  return (
    <Card
      key={product.productName}
      radius="lg"
      shadow="md"
      onMouseEnter={() => isDescVisible(true)}
      onMouseLeave={() => isDescVisible(false)}
      className="border-none w-full h-full relative flex flex-col hover:cursor-pointer hover:scale-[1.03] lg:hover:scale-105 overflow-hidden"
    >
      <Image
        src={product.productImages[0].url}
        alt={product.productName}
        className="object-cover w-full h-full"
        width={1000}
        height={1000}
      />
      <CardFooter
        className={`absolute bg-black/40 md:p-2 lg:gap-0 md:gap-1lg:p-3 self-end text-white bottom-0 w-full flex flex-col items-start`}
      >
        <div className="flex flex-row justify-between w-full gap-3 items-center">
          <h4 className="font-poppins font-semibold md:text-lg lg:text-xl text-left">
            {product.productName}
          </h4>
          <p className="font-geist font-bold text-md hover:block">
            {formatPrice(product.productPrice)}
          </p>
        </div>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out flex flex-col gap-3 font-poppins`}
          style={{
            maxHeight: descVisible ? "120px" : "0",
          }}
        >
          <p className="text-xs md:text-sm">
            {product.productDescription.short}
          </p>
          <div className="flex flex-row gap-3">
            <ButtonComponent
              label="Agregar"
              visualOpts={{
                color: "primary",
                className: "h-6 lg:h-7",
                bold: true,
              }}
              action={() =>
                addToCart({
                  amount: 1,
                  product,
                })
              }
            />
            <ButtonComponent
              label="Ver"
              visualOpts={{
                color: "secondary",
                className: "h-6 lg:h-7",
                bold: true,
              }}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
