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
      type: "inside",
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
      type: "inside",
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
      type: "inside",
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
      type: "inside",
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
      type: "inside",
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
      type: "inside",
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
      type: "inside",
      isHidden: true,
    },
    validations: [],
  },
];
