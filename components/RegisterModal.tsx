import { Modal, ModalBody, ModalContent } from "@heroui/react";
import React, { useEffect, useState } from "react";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RegisterModal({ isOpen, onClose }: LoginModalProps) {
  const [modalOpen, isModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      isModalOpen(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    isModalOpen(false);
  };
  return (
    <Modal
      isOpen={modalOpen}
      backdrop="blur"
      onClose={handleClose}
      placement="center"
    >
      <ModalContent>
        <ModalBody>
          <h4 className="font-poppins text-3xl font-semibold text-center py-3">
            Crear una cuenta
          </h4>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
