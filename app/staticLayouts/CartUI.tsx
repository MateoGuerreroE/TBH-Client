"use client";
import ButtonComponent from "@/components/base/ButtonComponent";
import {
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
import { useNPStore } from "../context/zustand";
import { formatPrice } from "@/utils";

export default function CartUI() {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const { userCart } = useNPStore();
  const totalPrice = userCart.reduce(
    (prev, next) => prev + next.productPrice * next.amount,
    0
  );
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
            {userCart.length}
          </p>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size="md"
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
                  {userCart.map((product, idx) => (
                    <div key={idx} className="flex flex-col h-20">
                      <div className="flex flex-row justify-between h-full items-center">
                        <p className="font-semibold max-w-[50%] text-sm">
                          {product.productName}
                        </p>
                        <p className="font-semibold max-w-[50%] text-sm">
                          {product.amount} x {formatPrice(product.productPrice)}
                        </p>
                        <div className="flex flex-row gap-1">
                          <ButtonComponent
                            color="secondary"
                            label="-"
                            custom="py-0"
                          />
                          <ButtonComponent
                            color="secondary"
                            label="+"
                            custom="py-0"
                          />
                        </div>
                      </div>
                      <Divider />
                    </div>
                  ))}
                </div>
              </DrawerBody>
              <Divider />
              <DrawerFooter className="flex flex-row justify-between items-center">
                <h3 className="text-lg lg:text-xl font-bold">
                  Total: {formatPrice(totalPrice)}
                </h3>
                <div className="flex flex-row gap-3">
                  <ButtonComponent
                    label="Ir a pagar"
                    redirectTo="/cart"
                    action={() => onClose()}
                  />
                  <ButtonComponent
                    custom="py-6"
                    size="sm"
                    label=""
                    color="secondary"
                    image="/icons/trash.svg"
                  />
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
