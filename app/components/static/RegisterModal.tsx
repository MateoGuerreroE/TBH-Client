"use client";
import {
  addToast,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
} from "@heroui/react";
import { useEffect, useState } from "react";
import Form from "../shared/form/Form";
import { UserRegister } from "@/types/Auth.types";
import createUserAction from "@/server/createUser.action";
import { RegisterFormData } from "@/utils/authForms.data";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "@/utils/firebase";
import Image from "next/image";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RegisterModal({ isOpen, onClose }: LoginModalProps) {
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

  const handleSubmit = async (values: UserRegister) => {
    const result = await createUserAction(values);
    if (result) {
      handleClose();
      addToast({
        title: "Bienvenido",
        description:
          "Ya puedes acceder a tu cuenta y realizar compras. Se ha enviado un correo de verificación",
        color: "success",
      });
    }
  };

  const handleExternalRegister = async () => {
    isLoading(true);
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const externalResult = await signInWithPopup(auth, provider);
      if (!externalResult.user.email) {
        throw new Error("Invalid firebase register");
      }
      await createUserAction({
        first_name: externalResult.user.displayName?.split(" ")[0] || "Nuevo",
        last_name: externalResult.user.displayName?.split(" ")[1] || "Usuario",
        email: externalResult.user.email,
        password: "",
        password_confirmation: "",
        firebase_id: externalResult.user.uid,
      });
      handleClose();
      addToast({
        title: "Bienvenido",
        description:
          "Ya puedes acceder a tu cuenta y realizar compras. Se ha enviado un correo de verificación",
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
            Crear una cuenta
          </h4>
          <Form
            submitText="Crear cuenta"
            inputs={RegisterFormData}
            submitAction={handleSubmit}
          />
          <Divider />
          <Button
            onPress={handleExternalRegister}
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
            Crear cuenta con
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
