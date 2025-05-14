import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import React from "react";

type ConfirmationProps = {
  execute: () => void;
  isOpen: boolean;
  title: string;
  content: string;
  onCancel?: () => void;
};

export default function Confirmation({
  title,
  content,
  isOpen,
  execute,
  onCancel = () => {},
}: ConfirmationProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      isDismissable={false}
      className="font-poppins"
    >
      <ModalContent className="p-2">
        <ModalHeader>
          <p className="w-full text-center">{title}</p>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-center w-full">{content}</p>
            <div className="w-full flex flex-row justify-center gap-5">
              <Button onPress={execute}>Confirmar</Button>
              <Button onPress={onCancel} color="danger">
                Cancelar
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
