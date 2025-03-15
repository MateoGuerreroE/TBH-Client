"use client";
import { Modal, ModalBody } from "@heroui/react";
import React from "react";

export default function AuthModal() {
  return (
    <div className="w-screen h-screen absolute flex">
      <Modal>
        <ModalBody>Hello!</ModalBody>
      </Modal>
    </div>
  );
}
