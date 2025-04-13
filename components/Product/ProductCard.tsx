"use client";
import { formatPrice } from "@/utils";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";

export type ProductProps = {
  name: string;
  shortDescription: string;
  images: string[];
  price: number;
};

export default function ProductCard({
  name,
  images,
  shortDescription,
  price,
}: ProductProps) {
  return (
    <Card shadow="none" radius="sm" className="font-poppins max-w-[400px]">
      <CardHeader className="flex justify-center items-center">
        <h6 className="font-semibold text-xl">{name}</h6>
      </CardHeader>
      <CardBody className="flex flex-col p-7 gap-5">
        <div className="w-full h-[300px] flex justify-center items-center overflow-hidden">
          <Carousel
            className="w-full h-full px-2"
            slide={false}
            draggable={false}
            theme={{
              indicators: {
                active: { on: "bg-black/50", off: "bg-black" },
              },
              control: {
                icon: "text-gray-800",
              },
            }}
          >
            {images.map((image, index) => (
              <Image
                key={`${index}_${image}`}
                src={image}
                alt={`${name}_mainImage`}
                width={400}
                height={400}
              />
            ))}
          </Carousel>
        </div>

        <p className="leading-5 text-center opacity-70">{shortDescription}</p>
      </CardBody>
      <CardFooter className="flex flex-row justify-between">
        <p className="font-bold text-lg text-orange-600">{`${formatPrice(price)}`}</p>
        <Button
          radius="full"
          className="bg-orange-600 text-white font-semibold"
        >
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
