"use client";
import Form from "@/baseComponents/form/Form";
import { shipFormData } from "../form";
import LoadingComponent from "@/app/components/LoadingComponent";
import { useState } from "react";

export type ShipFormProps = {
  isLoading: boolean;
  parentAction: () => void;
};

export default function ShipForm({ isLoading, parentAction }: ShipFormProps) {
  const [formData, setFormData] = useState<any>(null);

  console.log(formData);
  return (
    <div className="relative">
      {isLoading && <LoadingComponent />}
      <div className="z-0 p-5 flex flex-col justify-center font-poppins gap-3 w-full">
        <h2 className="text-2xl font-semibold">Datos de envio</h2>
        <Form
          inputs={shipFormData}
          submitAction={(values) => {
            setFormData(values);
            parentAction();
          }}
          submitText="Siguiente"
        />
      </div>
    </div>
  );
}
