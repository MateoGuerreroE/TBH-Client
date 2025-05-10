import React from "react";
import ContactForm from "./ContactForm";
import Style from "@/components/styles/Neuromorphism.module.css";
import ContactWhaWrapper from "./ContactWhaWrapper";

export default function ContactMain() {
  return (
    <div className="py-5 flex flex-1 w-full items-center justify-center max-w-[1500px] h-full my-14">
      <div className="flex flex-col md:flex-row p-5 h-full w-full gap-10 md:gap-3">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-5 md:pl-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">¡Contacta con nosotros!</h2>
            <div className="flex flex-col gap-5 items-center">
              <div className=" flex flex-col gap-3">
                <p className="text-justify">
                  Escríbenos a nuestro whatsapp o déjanos un mensaje.
                  Responderemos tu solicitud de contacto lo antes posible. Si
                  deseas una atención rápida, o deseas consultar acerca de un
                  pedido reciente, te aconsejamos que nos contactes por
                  whatsapp.
                </p>
              </div>
              <ContactWhaWrapper />
            </div>
            <p>O escríbenos por nuestras redes sociales.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center lg:pr-10">
          <div
            className={`${Style.neuromorph_internal} aspect-square w-full md:h-[550px] p-7 md:p-10 xl:p-16 flex flex-col justify-center`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
