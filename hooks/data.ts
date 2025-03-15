import { CustomFormData } from "@/types/form";
import { validateEmail } from "@/utils/regexp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../app/external/firebase";
import { serverPostRequest } from "@/utils/requests";
import { IAuthResponse } from "@/types/server/responses";

const { NEXT_PUBLIC_SERVER_URL } = process.env;

export interface ILoginBase {
  email: string;
  password: string;
}

export const LoginFormData: CustomFormData<ILoginBase> = {
  fields: {
    email: {
      key: "email",
      name: "Correo Electronico",
      required: true,
      inputType: "input",
      inputOpts: {
        variant: "faded",
      },
      type: "email",
      validations: [
        {
          exec: (val: string) => validateEmail(val),
          message: "El correo electronico no es valido",
        },
      ],
    },
    password: {
      key: "password",
      name: "Contraseña",
      required: true,
      inputType: "input",
      inputOpts: {
        variant: "faded",
      },
      type: "password",
      validations: [
        {
          exec: (val: string) => val.length > 6,
          message: "La contraseña debe tener al menos 6 caracteres",
        },
      ],
    },
  },
  submitText: "Iniciar Sesión",
};

export const loginFireBase = async (
  email: string,
  password: string
): Promise<string> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user.getIdToken();
};

export const loginServer = async (
  userToken: string
): Promise<IAuthResponse> => {
  const serverResponse = await serverPostRequest<IAuthResponse>(
    {
      token: userToken,
    },
    "http://localhost:8000/access/login",
    {}
  );
  if (serverResponse.isSuccess) {
    return serverResponse.response;
  } else throw new Error(serverResponse.response);
};
