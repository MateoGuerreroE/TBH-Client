import { Divider } from "@heroui/react";
import React from "react";

export default function Footer() {
  return (
    <footer className="-mt-14 h-[500px] bg-[#9AD8EB] w-full flex justify-center">
      <div className="flex flex-col max-w-[1500px] items-center justify-center w-full p-10 gap-7">
        <h3 className="text-left w-full text-5xl font-poppins font-semibold">
          Enlaces rápidos
        </h3>
        <div className="w-full h-full flex flex-row items-start">
          <div className="flex flex-col font-poppins gap-5">
            <div className="flex flex-col gap-3">
              <h5 className="text-2xl font-medium">Bogotá, Colombia</h5>
              <div className="flex flex-col text-lg">
                <p>Calle 123 # 123 - 123</p>
                <p>Barrio Bogotá</p>
                <p>+57 123 123 1234</p>
              </div>
              <h5 className="text-2xl font-medium">correo@tuhogarboreal.com</h5>
              <h5 className="text-2xl font-medium">Redes sociales</h5>
              <div className="flex flex-col text-lg">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <Divider orientation="vertical" className="mx-20 w-0" />
          <div className="flex flex-col font-poppins gap-5">
            <h5 className="text-2xl font-medium">Nuestra empresa</h5>
            <div className="flex flex-col text-lg gap-2">
              <p>Sobre Nosotros</p>
              <p>Términos de Envío</p>
              <p>Políticas de Privacidad</p>
              <p>Políticas de Devolución</p>
              <p>Términos de Servicio</p>
              <p>Contáctanos</p>
            </div>
          </div>
          <Divider orientation="vertical" className="mx-20 w-0" />
          <div className="flex flex-col font-poppins gap-5">
            <h5 className="text-2xl font-medium">Gestiona tu cuenta</h5>
            <div className="flex flex-col text-lg gap-2">
              <p>Mi cuenta</p>
              <p>Iniciar Sesión</p>
              <p>Información Personal</p>
              <p>Pedidos</p>
              <p>Direcciones</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
