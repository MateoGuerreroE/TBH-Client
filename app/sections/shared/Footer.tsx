import React from "react";

export default function Footer() {
  return (
    <footer className="h-[400px] md:h-[450px] lg:h-[500px] w-full bg-[#68c2dd] flex flex-col">
      <div className="flex flex-col self-center max-w-[1500px] w-full p-5 md:p-7 lg:p-10">
        <h2 className="font-poppins text-left text-2xl md:text-3xl py-2 md:py-6 lg:text-4xl font-bold">
          Enlaces rápidos
        </h2>
        <div className="flex flex-row flex-wrap md:gap-10 lg:gap-24">
          <div className="flex flex-col font-poppins">
            <h5 className="text-lg md:text-xl lg:text-2xl font-medium py-3">
              Bogotá, Colombia
            </h5>
            <div className="flex flex-col text-sm md:text-md lg:text-lg">
              <p>Calle 123 # 123 - 123</p>
              <p>Barrio Bogotá</p>
              <p>+57 123 123 1234</p>
            </div>
            <h5 className="text-sm md:text-md lg:text-xl font-medium py-3">
              correo@tuhogarboreal.com
            </h5>
            <h5 className="text-lg md:text-xl lg:text-2xl font-medium py-3">
              Redes sociales
            </h5>
            <div className="flex flex-col text-sm md:text-md lg:text-lg">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
          <div className="md:flex flex-col font-poppins hidden">
            <h5 className="text-xl lg:text-2xl font-medium py-3">
              Nuestra empresa
            </h5>
            <div className="flex-col text-md lg:text-lg gap-1 hidden md:flex">
              <p>Sobre Nosotros</p>
              <p>Términos de Envío</p>
              <p>Políticas de Privacidad</p>
              <p>Políticas de Devolución</p>
              <p>Términos de Servicio</p>
              <p>Contáctanos</p>
            </div>
          </div>
          <div className="md:flex flex-col font-poppins hidden">
            <h5 className="text-xl lg:text-2xl font-medium py-3">
              Gestiona tu cuenta
            </h5>
            <div className="flex flex-col text-md lg:text-lg gap-1">
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
