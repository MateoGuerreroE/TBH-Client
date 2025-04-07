"use client";
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { Button } from "@heroui/react";
import { useAppStore } from "@/app/context/zustand";

type AuthWrapperProps = {
  variation: "mobile" | "desktop";
  orientation: "horizontal" | "vertical";
  closeParent?: () => void;
};

export default function AuthWrapper({ orientation }: AuthWrapperProps) {
  const [loginModalOpen, isLoginModalOpen] = useState<boolean>(false);
  const [registerModalOpen, isRegisterModalOpen] = useState<boolean>(false);

  const { user } = useAppStore();

  return (
    <>
      <div className="flex flex-row"></div>
      <div
        className={`${orientation === "horizontal" ? "flex-row" : "flex-col"} ${user ? "hidden" : "flex"} gap-5 items-center`}
      >
        <Button
          onPress={() => isLoginModalOpen(true)}
          variant="shadow"
          className="hover:cursor-pointer font-poppins font-semibold"
        >
          Ingresar
        </Button>
        <Button
          variant="light"
          onPress={() => isRegisterModalOpen(true)}
          className="hover:cursor-pointer font-poppins font-semibold"
        >
          Crear cuenta
        </Button>
      </div>
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
