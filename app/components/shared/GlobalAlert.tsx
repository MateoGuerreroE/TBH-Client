"use client";
import { useAppStore } from "@/app/context/zustand";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React, { useEffect } from "react";

export type GlobalAlertProps = {
  title: string;
  content: React.ReactNode;
  timeout: number;
  isOpen: boolean;
};

export default function GlobalAlert({
  title,
  content,
  isOpen,
  timeout,
}: GlobalAlertProps) {
  const { setGlobalAlert } = useAppStore();
  const { onClose } = useDisclosure();

  const closeGlobalAlert = () => {
    setGlobalAlert({ title: "", content: "", timeout: 0, isOpen: false });
  };

  useEffect(() => {
    setTimeout(() => {
      closeGlobalAlert();
      onClose();
    }, timeout);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => closeGlobalAlert()}
      isDismissable={false}
      className="font-poppins"
    >
      <ModalContent className="p-5">
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
