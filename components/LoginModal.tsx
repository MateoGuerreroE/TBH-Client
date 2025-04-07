import {
  addToast,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import Form from "./base/Form";
import { loginUserAction } from "@/server/loginUser.action";
import { LoginForm } from "@/types/Auth.types";
import Image from "next/image";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "@/utils/firebase";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [modalOpen, isModalOpen] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      isModalOpen(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    isModalOpen(false);
  };

  const handleFormLogin = async (values: LoginForm) => {
    const result = await loginUserAction(values);
    addToast({
      title: "Bienvenido",
      description: `Hola ${result.fullName}, bienvenido de vuelta`,
      color: "success",
    });
    handleClose();
  };

  const handleExternalLogin = async () => {
    isLoading(true);
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const externalResult = await signInWithPopup(auth, provider);
      const result = await loginUserAction(
        undefined,
        await externalResult.user.getIdToken()
      );
      handleClose();
      addToast({
        title: "Bienvenido",
        description: `Hola ${result.fullName}, bienvenido de vuelta`,
        color: "success",
      });
    } catch (e) {
      alert(e);
    } finally {
      isLoading(false);
    }
  };

  return (
    <Modal
      isOpen={modalOpen}
      backdrop="blur"
      onClose={handleClose}
      placement="center"
    >
      <ModalContent>
        {loading ? (
          <div className="absolute w-full h-full bg-white/60 flex items-center justify-center z-[12]">
            <Spinner />
          </div>
        ) : (
          <></>
        )}
        <ModalBody className="flex flex-col gap-5 p-5 relative">
          <h4 className="font-poppins text-3xl font-semibold text-center py-3">
            Inicia Sesion
          </h4>
          <Form
            submitText="Ingresar"
            inputs={[
              {
                validations: [
                  {
                    type: "regexp",
                    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    errorMessage: "Usuario invalido",
                  },
                ],
                label: "Usuario",
                attribute: "email",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                },
              },
              {
                validations: [
                  {
                    type: "custom",
                    errorMessage: "Contraseña invalida",
                    validation: (val: string) => val.length > 5,
                  },
                ],
                label: "Contraseña",
                attribute: "password",
                inputOptions: {
                  isRequired: true,
                  type: "inside",
                  isHidden: true,
                },
              },
            ]}
            submitAction={handleFormLogin}
          />
          <Divider />
          <Button
            onPress={handleExternalLogin}
            className="font-poppins font-semibold"
            endContent={
              <Image
                alt="google"
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                width={30}
                height={30}
              />
            }
          >
            Ingresar con
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
