"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { useAppStore } from "@/app/context/zustand";
import AccountDropdown from "./AccountDropdown";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function MobileDropDown() {
  const [loginModalOpen, isLoginModalOpen] = useState<boolean>(false);
  const [registerModalOpen, isRegisterModalOpen] = useState<boolean>(false);
  const { user } = useAppStore();

  return (
    <>
      <div
        className={`${user ? "flex" : "hidden"} lg:hidden flex-row font-poppins w-32 items-center gap-0`}
      >
        <AccountDropdown
          type="mobile"
          userName={user?.fullName.split(" ")[0] ?? ""}
        />
      </div>
      <div className={`${user ? "hidden" : "block"} h-[40px] aspect-square`}>
        <Dropdown className="font-poppins">
          <DropdownTrigger className="lg:hidden">
            <Image src="/icons/user.svg" alt="user" width={40} height={40} />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="login" onPress={() => isLoginModalOpen(true)}>
              Ingresar
            </DropdownItem>
            <DropdownItem
              key="register"
              onPress={() => isRegisterModalOpen(true)}
            >
              Crear cuenta
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <LoginModal
          isOpen={loginModalOpen}
          onClose={() => isLoginModalOpen(false)}
        />
        <RegisterModal
          isOpen={registerModalOpen}
          onClose={() => isRegisterModalOpen(false)}
        />
      </div>
    </>
  );
}
