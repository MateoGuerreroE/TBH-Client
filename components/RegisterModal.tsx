import { addToast, Modal, ModalBody, ModalContent } from "@heroui/react";
import React, { useEffect, useState } from "react";
import Form from "./base/Form";
import { UserRegister } from "@/types/Auth.types";
import createUserAction from "@/server/createUser.action";

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

  const handleSubmit = async (values: UserRegister) => {
    const result = await createUserAction(values);
    console.log(result);
    handleClose();
    addToast({
      title: "Bienvenido",
    });
  };
  return (
    <Modal
      isOpen={modalOpen}
      backdrop="blur"
      onClose={handleClose}
      placement="center"
    >
      <ModalContent>
        <ModalBody className="flex flex-col gap-5 p-5">
          <h4 className="font-poppins text-3xl font-semibold text-center py-3">
            Crear una cuenta
          </h4>
          <Form
            submitText="Crear cuenta"
            inputs={[
              {
                label: "Nombre",
                attribute: "first_name",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                },
                validations: [
                  {
                    type: "regexp",
                    regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                    errorMessage: "Nombre invalido",
                  },
                ],
              },
              {
                label: "Apellido",
                attribute: "last_name",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                },
                validations: [
                  {
                    type: "regexp",
                    regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                    errorMessage: "Apellido invalido",
                  },
                ],
              },
              {
                label: "Correo",
                attribute: "email",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                },
                validations: [
                  {
                    type: "regexp",
                    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    errorMessage: "Correo invalido",
                  },
                ],
              },
              {
                label: "Contraseña",
                attribute: "password",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                  isHidden: true,
                },
                validations: [
                  {
                    type: "custom",
                    errorMessage: "Contraseña muy corta",
                    validation: (val: string) => val.length > 5,
                  },
                ],
              },
              {
                label: "Confirmar contraseña",
                attribute: "password_confirmation",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                  isHidden: true,
                },
                validations: [],
              },
            ]}
            submitAction={handleSubmit}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
