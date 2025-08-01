"use server";

import { LoginForm } from "@/types/Auth.types";
import app from "@/utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ClientError } from "@/types/Exceptions.types";
import { postResource } from "./fetch";
import { IUserLoginData } from "tbh-shared-types";

export async function loginUserAction(
  formData?: LoginForm,
  token?: string
): Promise<IUserLoginData> {
  try {
    let userToken: string;
    if (!token && formData) {
      const auth = getAuth(app);
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      userToken = await firebaseUser.user.getIdToken();
    } else if (token) {
      userToken = token;
    } else {
      throw new ClientError("No hay sufientes datos para iniciar sesión");
    }
    const { data: response } = await postResource<IUserLoginData>(
      `user/login`,
      { token: userToken },
      undefined,
      { next: { revalidate: 1800 } }
    );
    return response;
  } catch (e) {
    const message = (e as Error).message || "Server error";
    throw new ClientError("Credenciales incorrectas", message);
  }
}
