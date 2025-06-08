import { Divider } from "@heroui/react";
import React from "react";
import ButtonComponent from "../components/shared/ButtonComponent";

export default function AdminPage() {
  return (
    <main className="bg-sky-100 w-full min-h-[calc(100vh-6rem)] py-20 px-14 flex flex-col items-center font-poppins">
      <div className="max-w-[2000px] w-full bg-sky-50 rounded-xl p-5 shadow-md">
        <div className="flex flex-row justify-between px-5">
          <div className="my-8 flex flex-col gap-1">
            <h2 className="font-bold text-3xl">Bienvenido, Admin!</h2>
            <p>Rol: Administrador Maestro</p>
            <p>Permisos: Todos</p>
          </div>
          <div className="p-2">
            <div className="bg-black rounded-full h-32 w-32"></div>
          </div>
        </div>
        <Divider />
        <div className="my-8 px-5">
          <div className="mb-10">
            <h3 className="font-semibold text-xl">
              Panel de administración de la página
            </h3>
            <p>En este momento puedes administrar:</p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row items-center justify-between w-full px-5 bg-sky-100 shadow-inner rounded-2xl h-28">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">
                  Administrar Productos
                </h2>
                <p>Administra productos, categorías y subcategorías</p>
              </div>
              <ButtonComponent
                redirectTo="/admin/productos"
                label="Administrar"
                visualOpts={{ size: "lg" }}
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full px-5 bg-sky-100 shadow-inner rounded-2xl h-28">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">
                  Administrar Campañas de descuento
                </h2>
                <p>
                  Crea y administra campañas de descuentos para varios productos
                </p>
              </div>
              <ButtonComponent
                label="Administrar"
                visualOpts={{ size: "lg" }}
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full px-5 bg-sky-100 shadow-inner rounded-2xl h-28">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">
                  Administración de usuarios
                </h2>
                <p>Administra usuarios, cuentas, acceso y permisos</p>
              </div>
              <ButtonComponent
                label="Administrar"
                visualOpts={{ size: "lg" }}
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full px-5 bg-sky-100 shadow-inner rounded-2xl h-28">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">
                  Administrar Ordenes y Pagos
                </h2>
                <p>
                  Administra ordenes de pago en diferentes estados, cupones y
                  pagos
                </p>
              </div>
              <ButtonComponent
                label="Administrar"
                visualOpts={{ size: "lg" }}
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full px-5 bg-sky-100 shadow-inner rounded-2xl h-28">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Administrar Página</h2>
                <p>
                  Administra contenido de la página, así como valores por
                  defecto
                </p>
              </div>
              <ButtonComponent
                label="Administrar"
                visualOpts={{ size: "lg" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
