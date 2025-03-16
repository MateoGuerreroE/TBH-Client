import Button from "@/components/Button";
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

type Props = {};

export default function CartDrawer({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Image
        src="/icons/cart.svg"
        alt="cart_icon"
        width={30}
        height={30}
        className="hover:cursor-pointer"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#d1d1d1]"
        backdrop="blur"
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1 font-poppins text-2xl">
                Carrito de compras
              </DrawerHeader>
              <Divider />
              <DrawerBody className="flex flex-col">
                <p className="font-poppins text-md">Producto 1</p>
              </DrawerBody>
              <Divider />
              <DrawerFooter className="flex flex-row items-center justify-evenly">
                <p className="font-poppins text-md">Total: $0.00</p>
                <Button text="Comprar" />
                <Button text="Limpiar" />
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
