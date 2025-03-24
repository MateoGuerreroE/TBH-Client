"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function MobileDropDown() {
  const [loginModalOpen, isLoginModalOpen] = useState<boolean>(false);
  const [registerModalOpen, isRegisterModalOpen] = useState<boolean>(false);
  return (
    <>
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
    </>
  );
}
