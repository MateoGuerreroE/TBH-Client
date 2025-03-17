"use client";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function Contact() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <Image
        src="/migrate_cloud/Whatsapp.png"
        alt="whatsapp"
        width={200}
        height={200}
        className={`fixed bottom-5 right-5 w-20 h-20 hover:scale-105 hover:cursor-pointer ${isOpen ? "hidden" : "block"}`}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        backdrop="transparent"
        shouldBlockScroll={false}
        size="md" // Use a smaller size
        classNames={{
          base: "h-1/4 absolute top-[70%] right-5 rounded-lg",
          header: "pb-2",
          body: "overflow-y-auto",
        }}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader>Chat Title</DrawerHeader>
              <DrawerBody>{/* Your chat messages here */}</DrawerBody>
              <DrawerFooter>
                {/* Input field for sending messages */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
