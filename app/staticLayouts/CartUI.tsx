"use client";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function CartUI() {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <div className="fixed right-5 bottom-5 hover:scale-105">
        <Image
          src="/icons/cart.svg"
          alt="cart"
          className="h-12 w-12 lg:h-14 lg:w-14 hover:cursor-pointer bg-[#68c2dd] rounded-full p-3 shadow-md"
          onClick={onOpen}
          width={40}
          height={40}
        />
        <div className="absolute top-0 flex h-4 w-4 rounded-full bg-red-600 items-center justify-center">
          <p className="font-bold font-poppins text-[9px] text-center text-white h-[10px]">
            1
          </p>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size="sm"
        backdrop="blur"
      >
        <DrawerContent className="font-poppins bg-slate-200">
          {() => (
            <>
              <DrawerHeader className="lg:text-xl font-bold">
                Carrito de compras
              </DrawerHeader>
              <Divider />
              <DrawerBody className="p-5 flex flex-col">
                <div className="flex flex-col">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi id magni dolor tempore reiciendis expedita aliquam totam
                  nostrum assumenda laboriosam. Suscipit maiores impedit laborum
                  quae. Porro aliquid quas vel odit!
                </div>
              </DrawerBody>
              <Divider />
              <DrawerFooter className="flex flex-row justify-between items-center">
                <h3 className="text-md lg:text-xl">Total: $0.0</h3>
                <div className="flex flex-row gap-3">
                  <Button className="font-semibold">Checkout</Button>
                  <Button>Limpiar</Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
