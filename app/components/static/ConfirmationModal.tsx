import ButtonComponent from "@/baseComponents/ButtonComponent";
import { Modal, ModalBody, ModalContent } from "@heroui/react";
import React, { useEffect, useState } from "react";

type ConfirmationModalProps = {
  isOpen: boolean;
  action: (...args: unknown[]) => void;
  onClose: () => void;
};

export default function ConfirmationModal({
  action,
  onClose,
  isOpen,
}: ConfirmationModalProps) {
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
      onClose={handleClose}
      backdrop="blur"
      placement="center"
      className="bg-slate-200"
    >
      <ModalContent>
        <ModalBody className="font-poppins p-5">
          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-xl font-bold">¿Estás seguro?</p>
            <p className="text-md text-center">
              Esta acción no se puede deshacer. ¿Quieres continuar?
            </p>
            <div className="flex flex-row gap-4 mt-4">
              <ButtonComponent
                action={() => handleClose()}
                visualOpts={{ color: "secondary" }}
                label="Cancelar"
              />
              <ButtonComponent
                action={() => {
                  action();
                  handleClose();
                }}
                label="Confirmar"
              />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
