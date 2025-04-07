"use client";
import { useAppStore } from "@/app/context/zustand";
import app from "@/utils/firebase";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  useDisclosure,
} from "@heroui/react";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import React, { useState } from "react";
import Confirmation from "./Confirmation";

export type AccountDropdownProps = {
  type: "desktop" | "mobile";
  userName: string;
};

export default function AccountDropdown({
  type,
  userName,
}: AccountDropdownProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setUser } = useAppStore();
  const [confirmationOpen, setConfirmationOpen] = useState<boolean>(false);

  const handleLogOut = async () => {
    setUser(null);
    setConfirmationOpen(false);
    const auth = getAuth(app);
    await auth.signOut();
  };
  return (
    <>
      <Confirmation
        title="¿Estás seguro que deseas salir?"
        content=""
        isOpen={confirmationOpen}
        execute={handleLogOut}
        onCancel={() => setConfirmationOpen(false)}
      />
      <Dropdown
        isOpen={isOpen}
        onOpenChange={(open) => (open ? onOpen() : onClose())}
      >
        <DropdownTrigger className="cursor-pointer">
          <div className="flex flex-row items-center">
            {type === "mobile" ? (
              <Image src="/icons/user.svg" alt="user" width={40} height={40} />
            ) : (
              <p className="font-poppins">
                ¡Hola <b className="font-bold">{userName}</b>!
              </p>
            )}
            <Image
              src={`/icons/base-dd.svg`}
              alt="dd_icon"
              width={30}
              height={30}
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownSection showDivider>
            <DropdownItem key="account">Mi cuenta</DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              key="logout"
              onPress={() => setConfirmationOpen(true)}
              closeOnSelect={false}
            >
              Salir
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
