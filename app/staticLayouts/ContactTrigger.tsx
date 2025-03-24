"use client";
import Image from "next/image";

export default function ContactTrigger() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
        alt="cart"
        className="h-12 w-12 lg:h-16 lg:w-16 hover:cursor-pointer fixed right-5 bottom-20 lg:bottom-24 lg:-mr-1 -mr-0.5 hover:scale-105"
        onClick={() => window.open("https://wa.me/573115801692", "_blank")}
        width={100}
        height={100}
      />
    </>
  );
}
