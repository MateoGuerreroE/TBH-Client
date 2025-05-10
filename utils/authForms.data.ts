import { InputValues } from "@/types/Form.types";

export const LoginFormData: InputValues[] = [
  {
    validations: [
      {
        type: "regexp",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Usuario invalido",
      },
    ],
    label: "Usuario",
    attribute: "email",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
  },
  {
    validations: [
      {
        type: "custom",
        errorMessage: "Contraseña invalida",
        validation: (val: string) => val.length > 5,
      },
    ],
    label: "Contraseña",
    attribute: "password",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
      isHidden: true,
    },
  },
];

export const RegisterFormData: InputValues[] = [
  {
    label: "Nombre",
    attribute: "first_name",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        errorMessage: "Nombre invalido",
      },
    ],
  },
  {
    label: "Apellido",
    attribute: "last_name",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        errorMessage: "Apellido invalido",
      },
    ],
  },
  {
    label: "Correo",
    attribute: "email",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Correo invalido",
      },
    ],
  },
  {
    label: "Contraseña",
    attribute: "password",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
      isHidden: true,
    },
    validations: [
      {
        type: "custom",
        errorMessage: "Contraseña muy corta",
        validation: (val: string) => val.length > 5,
      },
    ],
  },
  {
    label: "Confirmar contraseña",
    attribute: "password_confirmation",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
      isHidden: true,
    },
    validations: [],
  },
];

export const ContactFormData: InputValues[] = [
  {
    label: "Nombre",
    attribute: "name",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        errorMessage: "Nombre invalido",
      },
    ],
  },
  {
    label: "Correo",
    attribute: "email",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
    },
    validations: [
      {
        type: "regexp",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Correo invalido",
      },
    ],
  },
  {
    label: "Mensaje",
    attribute: "message",
    type: "textarea",
    inputOptions: {
      isRequired: true,
      visualType: "inside",
      isHidden: true,
    },
    validations: [
      {
        type: "custom",
        errorMessage: "Mensaje muy corto",
        validation: (val: string) => val.length > 5,
      },
    ],
  },
];
