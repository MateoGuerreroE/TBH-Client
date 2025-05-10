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
import { useAppStore } from "@/app/context/zustand";
import { LoginFormData } from "@/utils/authForms.data";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [modalOpen, isModalOpen] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const { setUser } = useAppStore();
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
    setUser(result);
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
      setUser(result);
      handleClose();
      addToast({
        title: "Bienvenido",
        description: `Hola ${result.fullName.split(" ")[0]}, bienvenido de vuelta`,
        color: "success",
      });
    } catch (e) {
      addToast({
        title: "Ha ocurrido un error",
        description: (e as Error).message || "Intenta nuevamente más tarde",
        color: "danger",
      });
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
      className="mx-5 bg-slate-200"
    >
      <ModalContent>
        {loading ? (
          <div className="absolute w-full h-full bg-white/60 flex items-center justify-center z-[12]">
            <Spinner />
          </div>
        ) : (
          <></>
        )}
        <ModalBody className="flex flex-col gap-5 p-5">
          <h4 className="font-poppins text-3xl font-semibold text-center py-3">
            Inicia Sesion
          </h4>
          <Form
            submitText="Ingresar"
            inputs={LoginFormData}
            submitAction={handleFormLogin}
          />
          <Divider />
          <Button
            onPress={handleExternalLogin}
            className="font-poppins font-semibold bg-[#017392] text-slate-100"
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
