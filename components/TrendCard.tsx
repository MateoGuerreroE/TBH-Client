"use client";
import { ProductInfo } from "@/types/Data.types";
import { formatPrice } from "@/utils";
import { Button, Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";

type TrendCarProps = {
  product: ProductInfo;
};

export default function TrendCard({ product }: TrendCarProps) {
  const [descVisible, isDescVisible] = useState<boolean>(false);
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
        src={product.image}
        alt={product.productName}
        className="object-cover w-full h-full"
        width={1000}
        height={1000}
      />
      {product.discount && (
        <div
          className={`absolute rounded-bl-lg shadow-inner right-0 bg-orange-600 font-poppins font-bold text-xl p-2`}
        >
          {"- " + product.discount + "%"}
        </div>
      )}
      <CardFooter
        className={`absolute bg-black/40 md:p-2 lg:gap-0 md:gap-1lg:p-3 self-end text-white bottom-0 w-full flex flex-col items-start`}
      >
        <div className="flex flex-row justify-between w-full gap-3 items-center">
          <h4 className="font-poppins font-semibold md:text-lg lg:text-xl text-left">
            {product.productName}
          </h4>
          <p className="font-geist font-bold text-md hover:block">
            {formatPrice(product.price)}
          </p>
        </div>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out flex flex-col gap-3 font-poppins`}
          style={{
            maxHeight: descVisible ? "120px" : "0",
          }}
        >
          <p className="text-xs md:text-sm">{product.description}</p>
          <div className="flex flex-row gap-3">
            <Button className="h-6 lg:h-7">Comprar</Button>
            <Button className="h-6 lg:h-7">Ver</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
