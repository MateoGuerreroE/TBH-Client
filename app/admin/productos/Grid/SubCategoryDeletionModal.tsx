import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { useProdAdminContext } from "../ChangesContext";
import { serverFetch } from "@/server/fetch";
import LoadingComponent from "@/app/components/shared/LoadingComponent";
import { ISubcategoryRecord } from "tbh-shared-types";

type Props = {
  subCategoryId: string;
  setRowData: React.Dispatch<
    React.SetStateAction<Array<ISubcategoryRecord & { hasChanged: boolean }>>
  >;
};

export default function SubCategoryDeletionModal({
  subCategoryId,
  setRowData,
}: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setSubCategories } = useProdAdminContext();
  const [loading, isLoading] = useState(false);

  const handleDeletion = async () => {
    isLoading(true);
    try {
      const result = await serverFetch<boolean>(
        `subCategory/${subCategoryId}`,
        {
          method: "DELETE",
        }
      );
      if (result.data) {
        setSubCategories((prev) =>
          prev.filter((p) => p.subCategoryId !== subCategoryId)
        );
        setRowData((prev) =>
          prev.filter((p) => p.subCategoryId !== subCategoryId)
        );
        onClose();
        addToast({
          title: "Sub-Categoria eliminada",
          description: "La subcategoria ha sido eliminada correctamente.",
          color: "success",
        });
      } else {
        addToast({
          title: "Error al eliminar subcategoria",
          description:
            "No se pudo eliminar la subcategoria. Intente nuevamente.",
          color: "danger",
        });
      }
    } catch {
      addToast({
        title: "Error al eliminar subcategoria",
        description: "No se pudo eliminar la subcategoria. Intente nuevamente.",
        color: "danger",
      });
    } finally {
      isLoading(false);
    }
  };

  return (
    <>
      <Image
        src="/icons/trash.svg"
        className="hover:cursor-pointer"
        alt="delete"
        width={25}
        height={25}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="font-poppins my-1">
          {loading && <LoadingComponent />}
          <ModalHeader className="font-bold text-lg">
            Eliminar Sub-Categoria
          </ModalHeader>
          <ModalBody className="relative">
            <div className="flex flex-col gap-3 font-poppins">
              <p className="font-semibold">
                ¿Está seguro de eliminar esta sub-categoria? Todas los productos
                asociados serán eliminados. Este cambio no es reversible.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="flex flex-row w-full text-white font-bold justify-between">
              <Button color="primary" onPress={handleDeletion}>
                Aceptar
              </Button>
              <Button color="danger" onPress={onClose}>
                Cancelar
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
