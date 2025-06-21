import ButtonComponent from "@/app/components/shared/ButtonComponent";
import {
  addToast,
  Checkbox,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import { ImageType, ProductImage } from "@/types/Data.types";
export interface ImagesModalProps {
  productId: string;
  images: ProductImage[];
}

type FormData = {
  file: File | null;
  url: string;
  color: string;
  isPrimary: boolean;
  type: ImageType;
};

export default function ImagesModal({ images, productId }: ImagesModalProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [colValues, setColValues] = useState(images);
  const [formValues, setFormValues] = useState<FormData>({
    file: null,
    url: "",
    color: "",
    isPrimary: false,
    type: "color",
  });

  const handleRemoveImage = (imageUrl: string) => {
    setColValues((prev) => prev.filter((img) => img.url !== imageUrl));
  };
  const [colDefs] = useState<ColDef[]>([
    { field: "url", headerName: "Imagen", width: 200 },
    { field: "color", headerName: "Color", width: 120 },
    { field: "isPrimary", headerName: "Principal", width: 110 },
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

  const addImageFromForm = async () => {
    const { file, ...values } = formValues;
    const newImage: ProductImage = {
      ...values,
    };

    if (file !== null) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "tbh-uploads");
      formData.append(
        "api_key",
        process.env.NEXT_PUBLIC_CLOUDINARY_SECRET || ""
      );

      const result = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!result.ok) {
        console.error("Error uploading image:", result.statusText);
        addToast({
          title: "Error al subir imagen",
          description: "No se pudo subir la imagen al servidor.",
          color: "danger",
        });
      }

      const data = await result.json();
      newImage.url = data.secure_url;
    }
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
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setFormValues((prev) => ({ ...prev, file }));
                        }}
                      />
                      <div className="flex flex-row gap-3">
                        <Checkbox
                          isSelected={formValues.isPrimary}
                          onValueChange={(value) =>
                            setFormValues((p) => ({ ...p, isPrimary: value }))
                          }
                        >
                          Imagen Principal
                        </Checkbox>
                        <Tooltip content="Si existe otra imagen marcada como principal, esta se reemplazará.">
                          <div className="font-semibold font-poppins hover:cursor-pointer rounded-full aspect-square w-5 flex items-center justify-center h-5 bg-transparent border-2 border-slate-600 text-slate-600">
                            ?
                          </div>
                        </Tooltip>
                      </div>

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
