"use client";
import Form from "@/app/components/shared/form/Form";
import { shipFormData } from "../form";
import LoadingComponent from "@/app/components/shared/LoadingComponent";

export type ShipFormProps = {
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parentAction: (state: any) => void;
};

export default function ShipForm({ isLoading, parentAction }: ShipFormProps) {
  return (
    <div className="relative">
      {isLoading && <LoadingComponent />}
      <div className="z-0 p-5 flex flex-col justify-center font-poppins gap-3 w-full">
        <h2 className="text-2xl font-semibold">Datos de envio</h2>
        <Form
          inputs={shipFormData}
          submitAction={(values) => {
            parentAction(values);
          }}
          submitText="Siguiente"
        />
      </div>
    </div>
  );
}
