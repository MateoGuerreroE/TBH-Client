"use client";
import { formatPrice } from "@/utils";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Carousel from "../Carousel/Carousel";

export type ProductProps = {
  name: string;
  shortDescription: string;
  images: string[];
  price: number;
};

export default function ProductCard({ name, images, price }: ProductProps) {
  return (
    <div className="py-2 p-1">
      <Card
        radius="sm"
        className="font-poppins h-full bg-white/20 my-2"
        shadow="none"
      >
        <CardHeader className=" w-full flex justify-center items-center">
          <h6 className="font-semibold text-2xl text-center">{name}</h6>
        </CardHeader>
        <CardBody className="flex flex-col p-7 gap-5">
          <div className="">
            <Carousel
              options={{ autoPlay: false, watchDrag: false, dotButton: true }}
            >
              {images.map((image, index) => (
                <div key={`${index}_${image}`} className="h-44">
                  <Image
                    src={image}
                    alt={`${name}_mainImage`}
                    width={400}
                    className="h-full w-full"
                    height={400}
                  />
                </div>
              ))}
            </Carousel>
          </div>
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
    </div>
  );
}
