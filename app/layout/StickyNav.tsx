"use client";
import SelectOption from "@/components/SelectOption";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./layout.module.css";
import SearchBar from "@/components/SearchBar";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  addToast,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  DropdownSection,
} from "@heroui/react";
import { useForm } from "@/hooks/useForm";
import { LoginFormData } from "../../hooks/data";
import { ExecAction } from "@/types/form";
import { useAuthentication } from "@/hooks/useAuthentication";
import CartDrawer from "./CartDrawer";

export default function StickyNav() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [visibleSearch, isSearchVisible] = useState(false);
  const { loginUser } = useAuthentication();

  const LoginFormAction: ExecAction<boolean> = {
    trigger: async (data) => {
      const result = await loginUser(data);
      if (result.isSuccess) {
        onClose();
      }
      return result;
    },
    successMessage: "Sesión iniciada correctamente",
    failureMessage: "Credenciales Incorrectas",
  };

  const { FormComponent: LoginForm } = useForm(LoginFormData, LoginFormAction);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      isSearchVisible(currentScrollPos > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-row bg-transparent w-full text-black font-semibold justify-center sticky top-0 h-14 z-10 ${styles.blurEffect}`}
    >
      <div className="h-full w-full max-w-[1400px] flex flex-row justify-between px-10">
        <div className="flex flex-row gap-9 py-4 items-center">
          <SelectOption label="Inicio" font="font-geist" />
          <SelectOption label="Productos" font="font-geist" />
          <Dropdown className="">
            <DropdownTrigger className="hover:cursor-pointer hover:scale-105 font-poppins text-md font-semibold">
              Categorias
            </DropdownTrigger>
            <DropdownMenu
              className="flex flex-row gap-7"
              classNames={{ list: ["flex flex-row font-poppins"] }}
            >
              <DropdownSection title={"Hogar"}>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
              </DropdownSection>
              <DropdownSection title={"Electronicos"}>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
                <DropdownItem key={"cat1"}>Categoria1</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
          <SelectOption label="Nosotros" font="font-geist" />
          <SelectOption label="Contacto" font="font-geist" />
        </div>
        <div
          className={`${styles.searchBar} ${visibleSearch ? styles.searchBarVisible : ""} items-center flex`}
        >
          <SearchBar width="w-auto" variant="bordered" />
        </div>
        <div className="h-full flex items-center self-center gap-9">
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
            <ModalContent>
              {() => (
                <>
                  <ModalBody className="p-7 bg-[#d1d1d1]">
                    <h4 className="font-poppins text-3xl font-semibold text-center py-3">
                      Inicia Sesion
                    </h4>
                    <LoginForm />
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
          <SelectOption label="Ingresa" font="font-geist" action={onOpen} />
          <SelectOption
            label="Crea tu cuenta"
            font="font-geist"
            action={() =>
              addToast({
                title: "En implementacion",
                color: "warning",
              })
            }
          />
          <CartDrawer />
        </div>
      </div>
    </div>
  );
}
