import ButtonComponent from "@/app/components/shared/ButtonComponent";
import {
  addToast,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";

export interface ImagesModalProps {
  productId: string;
  images: any[];
}

export default function ImagesModal({ images, productId }: ImagesModalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [colValues, setColValues] = useState(images);
  const [formValues, setFormValues] = useState({
    url: "",
    color: "",
  });

  const handleRemoveImage = (imageUrl: string) => {
    console.log(imageUrl);
    setColValues((prev) => prev.filter((img) => img.url !== imageUrl));
  };
  const [colDefs] = useState<ColDef[]>([
    { field: "url", headerName: "Imagen", width: 200 },
    { field: "color", headerName: "Color", width: 120 },
    { field: "status", headerName: "Estado", width: 110 },
    {
      field: "action",
      headerName: "Eliminar",
      width: 100,
      cellClass: "flex items-center justify-center",
      cellRenderer: (param: ICellRendererParams) => {
        return (
          <ButtonComponent
            label=""
            action={() => handleRemoveImage(param.data.url)}
            visualOpts={{
              size: "sm",
              className: "hover:cursor-pointer",
              startingIcon: "/icons/trash.svg",
            }}
          />
        );
      },
    },
  ]);

  const addImageFromForm = () => {
    const newImage = {
      ...formValues,
      status: "active", // Default status, can be changed as needed
    };
    setColValues((prev) => [...prev, newImage]);
  };

  const handleSaveChanges = async () => {
    try {
      const result = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/product/objects/" + productId,
        {
          method: "PUT",
          body: JSON.stringify({
            productImages: colValues,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!result.ok) {
        throw new Error(result.statusText);
      }

      addToast({
        title: "Cambios guardados",
        description:
          "Las imágenes del producto se han actualizado correctamente.",
        color: "success",
      });
      onClose();
    } catch (e) {
      addToast({
        title: "Error al guardar cambios",
        description:
          (e as Error).message || "Ocurrió un error al guardar las imágenes.",
        color: "danger",
      });
    }
  };

  return (
    <>
      <ButtonComponent
        label="Editar"
        visualOpts={{ size: "sm" }}
        action={() => onOpen()}
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="min-w-[600px] bg-sky-50"
      >
        <ModalContent className="font-poppins">
          {() => (
            <>
              <ModalHeader>Imagenes de producto</ModalHeader>
              <ModalBody className="h-[400px] pb-7">
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold my-2">Agregar una imagen</h4>
                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <Input
                        isRequired
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            color: e.target.value,
                          })
                        }
                        label="Color"
                        labelPlacement="outside-left"
                        classNames={{
                          inputWrapper: "bg-white",
                          mainWrapper: "w-full",
                          label: "font-semibold",
                        }}
                        fullWidth={true}
                      />
                      <Input
                        type="file"
                        label="Subir archivo"
                        labelPlacement="outside-left"
                        classNames={{
                          inputWrapper: "bg-white",
                          mainWrapper: "w-full",
                          label: "font-semibold",
                        }}
                        fullWidth={true}
                      />

                      <Input
                        label="Enlace externo"
                        labelPlacement="outside-left"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            url: e.target.value,
                          })
                        }
                        classNames={{
                          inputWrapper: "bg-white",
                          mainWrapper: "w-full",
                          label: "font-semibold",
                        }}
                        placeholder="Opcional"
                        fullWidth={true}
                      />
                    </div>
                    <ButtonComponent
                      label="Agregar"
                      action={() => addImageFromForm()}
                    />
                  </div>
                </div>
                <Divider className="my-2" />
                <div className="h-[250px] w-full">
                  <AgGridReact
                    rowClass={"font-poppins"}
                    rowData={colValues}
                    columnDefs={colDefs}
                    localeText={{
                      noRowsToShow: "No hay información para mostrar",
                    }}
                  />
                </div>
                <ButtonComponent
                  label="Guardar"
                  action={() => handleSaveChanges()}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
