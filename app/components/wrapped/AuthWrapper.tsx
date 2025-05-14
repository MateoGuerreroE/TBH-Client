"use client";
import React, { useState } from "react";
import LoginModal from "../static/LoginModal";
import RegisterModal from "../static/RegisterModal";
import { Button } from "@heroui/react";
import { useAppStore } from "@/app/context/zustand";
import AccountDropdown from "../static/AccountDropdown";

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
      <div
        className={`${user ? "flex" : "hidden"} flex-row font-poppins w-40 items-center gap-0`}
      >
        <AccountDropdown
          type="desktop"
          userName={user?.fullName.split(" ")[0] ?? ""}
        />
      </div>
      <div
        className={`${orientation === "horizontal" ? "flex-row" : "flex-col"} ${user ? "hidden" : "flex"} gap-5 items-center`}
      >
        <Button
          onPress={() => isLoginModalOpen(true)}
          variant="solid"
          className="hover:cursor-pointer font-poppins font-semibold bg-[#68c2dd] text-slate-800"
        >
          Ingresar
        </Button>
        <Button
          variant="ghost"
          onPress={() => isRegisterModalOpen(true)}
          className="hover:cursor-pointer font-poppins font-semibold border-slate-400"
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
