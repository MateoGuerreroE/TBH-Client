import {
  addToast,
  Button,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React, { useState } from "react";

type Props = {
  tagSetter: (productId: string, newTag: string) => void;
  productId: string;
};

export default function TagsModal({ tagSetter, productId }: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [newTag, setNewTag] = useState<string>("");

  const handleCreation = () => {
    if (newTag.trim() !== "") {
      tagSetter(productId, newTag.trim());
    }
    onClose();
    addToast({
      title: "Etiqueta creada",
      description: `La etiqueta "${newTag}" ha sido creada.`,
      color: "success",
    });
  };

  return (
    <>
      <Chip
        className="hover:cursor-pointer text-white font-bold"
        color="primary"
        onClick={() => onOpen()}
      >
        +
      </Chip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="sm"
        className="py-3"
      >
        <ModalContent>
          <ModalHeader>Crear una nueva etiqueta</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2">
              <Input
                label="Etiqueta"
                labelPlacement="inside"
                value={newTag}
                onChange={(v) => setNewTag(v.target.value)}
              />
              <Button
                color="primary"
                className="font-poppins text-white font-semibold"
                onPress={() => handleCreation()}
              >
                Crear
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
