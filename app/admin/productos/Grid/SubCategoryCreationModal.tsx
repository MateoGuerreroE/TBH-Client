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
import { ICategoryRecord, ISubcategoryRecord } from "tbh-shared-types";

type Props = {
  setSubCategories: React.Dispatch<React.SetStateAction<ISubcategoryRecord[]>>;
  categories: ICategoryRecord[];
};

type FormValues = {
  subCategoryName: string;
  categoryName: string;
};

export default function SubCategoryCreationModal({
  setSubCategories,
  categories,
}: Props) {
  const { onOpen, onOpenChange, onClose, isOpen } = useDisclosure();

  const formInputs: InputValues[] = [
    {
      type: "text",
      label: "Nombre",
      attribute: "subCategoryName",
      inputOptions: {
        isRequired: true,
      },
      validations: [],
    },
    {
      type: "select",
      label: "Categoría",
      attribute: "categoryName",
      selections: categories.map((c) => c.categoryName),
      inputOptions: {
        isRequired: true,
      },
    },
  ];

  const handleSubCategoryCreation = async (values: FormValues) => {
    const subCategoryToCreate = {
      subCategoryName: values.subCategoryName,
      categoryId: categories.find((c) => c.categoryName === values.categoryName)
        ?.categoryId,
      //! TODO CHANGE THIS
      createdBy: "e7bc3690-48ee-424f-9ce3-2572372bdb66",
    };

    try {
      const { data } = await postResource<ISubcategoryRecord>(
        "subCategory/create",
        subCategoryToCreate
      );
      setSubCategories((prev) => [...prev, data]);
      addToast({
        title: "Subcategoría creada",
        description: "La subcategoría ha sido creada correctamente.",
        color: "success",
      });
      onClose();
    } catch (error) {
      console.error("Error creating subCategory:", error);
      addToast({
        title: "Error",
        description: "No se pudo crear esta subcategoria",
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
            Crear una nueva subcategoría
          </ModalHeader>
          <ModalBody className="my-5">
            <Form
              submitAction={handleSubCategoryCreation}
              submitText="Crear"
              inputs={formInputs}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
