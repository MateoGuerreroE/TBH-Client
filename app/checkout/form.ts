import { InputValues } from "@/types/Form.types";

export const shipFormData: InputValues[] = [
  {
    label: "Nombre completo",
    attribute: "fullName",
    type: "text",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[a-zA-Z\s-áéíóúÁÉÍÓÚñÑüÜ]+$/,
        errorMessage: "El nombre solo puede contener letras y espacios",
      },
    ],
  },
  {
    type: "select",
    attribute: "city",
    label: "Ciudad",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    selections: [
      "Bogotá",
      "Medellín",
      "Cali",
      "Barranquilla",
      "Cartagena",
      "Cúcuta",
      "Bucaramanga",
      "Pereira",
      "Santa Marta",
      "Manizales",
    ],
  },
  {
    type: "text",
    label: "Dirección",
    attribute: "address",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[a-zA-Z0-9\s.,#\-áéíóúÁÉÍÓÚñÑüÜ]+$/,
        errorMessage:
          "La dirección solo puede contener letras, números, espacios y los caracteres ., # -",
      },
    ],
  },
  {
    type: "area",
    label: "Notas adicionales",
    attribute: "notes",
    inputOptions: {
      isRequired: false,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[a-zA-Z0-9\s.,#\-áéíóúÁÉÍÓÚñÑüÜ]*$/,
        errorMessage:
          "Las notas solo pueden contener letras, números, espacios y los caracteres ., # -",
      },
    ],
  },
  {
    type: "text",
    label: "Celular",
    attribute: "phone",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^\d{10}$/,
        errorMessage: "El teléfono debe contener 10 dígitos",
      },
    ],
  },
];
