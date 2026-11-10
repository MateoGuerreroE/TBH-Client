"use client";
import ButtonComponent from "@/app/components/shared/ButtonComponent";
import Form from "@/app/components/shared/form/Form";
import { postResource } from "@/server/fetch";
import { InputValues } from "@/types/Form.types";
import {
  addToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React from "react";
import { ICategoryRecord } from "tbh-shared-types";

type Props = {
  setCategories: React.Dispatch<React.SetStateAction<ICategoryRecord[]>>;
};

type FormValues = {
  categoryName: string;
};

export default function CategoryCreationModal({ setCategories }: Props) {
  const { onOpen, onOpenChange, onClose, isOpen } = useDisclosure();

  const formInputs: InputValues[] = [
    {
      type: "text",
      label: "Nombre",
      attribute: "categoryName",
      inputOptions: {
        isRequired: true,
      },
      validations: [],
    },
  ];

  const handleCategoryCreation = async (values: FormValues) => {
    const categoryToCreate = {
      categoryName: values.categoryName,
      //! TODO CHANGE THIS
      createdBy: "e7bc3690-48ee-424f-9ce3-2572372bdb66",
    };

    try {
      const { data } = await postResource<ICategoryRecord>(
        "category/create",
        categoryToCreate
      );
      setCategories((prev) => [...prev, data]);
      onClose();
    } catch (error) {
      console.error("Error creating category:", error);
      addToast({
        title: "Error",
        description: "No se pudo crear esta categoria",
        color: "danger",
      });
    }
  };

  return (
    <>
      <ButtonComponent label="Crear nuevo" action={() => onOpen()} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="font-poppins relative my-2">
          <ModalHeader className="text-lf font-bold">
            Crear una nueva categoría
          </ModalHeader>
          <ModalBody className="my-5">
            <Form
              submitAction={handleCategoryCreation}
              submitText="Crear"
              inputs={formInputs}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
