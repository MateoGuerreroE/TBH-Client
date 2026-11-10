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
import { IProductRecord } from "tbh-shared-types";
import LoadingComponent from "@/app/components/shared/LoadingComponent";

type Props = {
  productId: string;
  setRowData: React.Dispatch<
    React.SetStateAction<Array<IProductRecord & { hasChanged: boolean }>>
  >;
};

export default function ProductDeletionModal({ productId, setRowData }: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setProducts } = useProdAdminContext();
  const [loading, isLoading] = useState(false);

  const handleDeletion = async () => {
    isLoading(true);
    const result = await serverFetch<boolean>(`product/${productId}`, {
      method: "DELETE",
    });

    if (result.data) {
      setProducts((prev) => prev.filter((p) => p.productId !== productId));
      setRowData((prev) => prev.filter((p) => p.productId !== productId));
      onClose();
      addToast({
        title: "Producto eliminado",
        description: "El producto ha sido eliminado correctamente.",
        color: "success",
      });
    } else {
      addToast({
        title: "Error al eliminar producto",
        description: "No se pudo eliminar el producto. Intente nuevamente.",
        color: "danger",
      });
    }
    isLoading(false);
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
            Eliminar Producto
          </ModalHeader>
          <ModalBody className="relative">
            <div className="flex flex-col gap-3 font-poppins">
              <p className="font-semibold">
                ¿Está seguro de eliminar este producto? Este cambio no es
                reversible
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
