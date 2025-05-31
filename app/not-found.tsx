import ButtonComponent from "@/app/components/shared/ButtonComponent";
import React from "react";

export default function NotFoundPage() {
  return (
    <main className="pt-14 bg-sky-100 h-[calc(100vh-80px)] md:h-[calc(100vh-120px)] flex flex-col items-center">
      <div className="flex flex-col w-full h-full max-w-[1500px] p-10 pt-[50px] md:pt-[100px] items-center text-center gap-7 font-poppins">
        <img src="/not-found.gif" alt="not-found" className="w-52" />
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-5xl font-bold">¡Oops!</h1>
          <h1 className="text-3xl md:text-5xl font-bold">
            Esta página no existe
          </h1>
        </div>
        <p className="text-lg md:max-w-[60%]">
          Estás intentando ingresar a una sección inexistente de nuestra página.
          Si llegaste aquí por uno de nuestros enlaces, por favor háznoslo saber
          para poder arreglarlo
        </p>
        <ButtonComponent
          label="Volver al inicio"
          visualOpts={{ color: "primary" }}
          redirectTo="/"
        />
      </div>
    </main>
  );
}
