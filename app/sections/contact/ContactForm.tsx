"use client";
import Form from "@/baseComponents/form/Form";
import { ContactFormData } from "@/utils/authForms.data";
import React from "react";

export default function ContactForm() {
  return (
    <>
      <h3 className="font-semibold text-xl pb-3">Formulario de contacto</h3>
      <Form
        inputs={ContactFormData}
        submitText="Enviar mensaje"
        submitAction={() => {
          alert("HEY!");
        }}
      />
      <p className="text-sm pt-2 text-center">
        Si necesitas adjuntar archivos, envíanos un correo directamente a{" "}
        <u>sample@gmail.com</u>
      </p>
    </>
  );
}
