import ButtonComponent from "@/app/components/shared/ButtonComponent";
import Form from "@/app/components/shared/form/Form";
import { postResource } from "@/server/fetch";
import { ProductInfo, SubCategoryInfo } from "@/types/Data.types";
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

type Props = {
  subCategories: SubCategoryInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
};

type FormValues = {
  productName: string;
  productPrice: string;
  subCategoryName: string;
  externalId?: string;
};

export default function ProductCreationModal({
  setProducts,
  subCategories,
}: Props) {
  const { onOpen, onOpenChange, onClose, isOpen } = useDisclosure();

  const formInputs: InputValues[] = [
    {
      type: "text",
      label: "Nombre del producto",
      attribute: "productName",
      inputOptions: {
        isRequired: true,
      },
      validations: [],
    },
    {
      type: "text",
      label: "Precio del producto",
      attribute: "productPrice",
      inputOptions: {
        isRequired: true,
      },
      validations: [],
    },
    {
      type: "select",
      label: "Subcategoría",
      attribute: "subCategoryName",
      inputOptions: {
        isRequired: true,
      },
      selections: subCategories.map((subCat) => subCat.subCategoryName),
    },
    {
      type: "text",
      label: "ID externo",
      attribute: "externalId",
      inputOptions: {
        isRequired: false,
      },
      validations: [],
    },
  ];

  const handleProductCreation = async (values: FormValues) => {
    const productToCreate = {
      productName: values.productName,
      productPrice: parseFloat(values.productPrice),
      discount: 0,
      externalId: values.externalId?.length ? values.externalId : null,
      subCategoryId: subCategories.find(
        (subCat) => subCat.subCategoryName === values.subCategoryName
      )?.subCategoryId,
      //! TODO CHANGE THIS
      createdBy: "e7bc3690-48ee-424f-9ce3-2572372bdb66",
    };

    try {
      const { data } = await postResource<ProductInfo>(
        "product/create",
        productToCreate
      );
      setProducts((prev) => [...prev, data]);
      onClose();
    } catch (error) {
      console.error("Error creating product:", error);
      addToast({
        title: "Error",
        description: "No se pudo crear el producto",
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
            Crear un nuevo producto
          </ModalHeader>
          <ModalBody className="my-5">
            <Form
              submitAction={handleProductCreation}
              submitText="Crear"
              inputs={formInputs}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
