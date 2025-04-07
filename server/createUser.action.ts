import { UserRegister } from "@/types/Auth.types";
import { ClientError } from "@/types/Exceptions.types";
import axios, { AxiosError } from "axios";
import app from "@/utils/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { ServerResponse } from "@/types/Data.types";

export default async function createUserAction(
  userForm: UserRegister
): Promise<ServerResponse<string>> {
  try {
    const { password_confirmation, ...userData } = userForm;
    if (userData.password !== password_confirmation) {
      throw new ClientError("Las contraseñas no coinciden");
    }
    const auth = getAuth(app);
    const firebaseUser = await createUserWithEmailAndPassword(
      auth,
      userForm.email,
      userForm.password
    );
    const userId = firebaseUser.user.uid;
    const { data: response } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/access/create_user`,
      {
        ...userData,
        firebase_id: userId,
      }
    );
    return response;
  } catch (e) {
    if (e instanceof ClientError) {
      throw e;
    } else if (e instanceof FirebaseError) {
      if (e.code === "auth/email-already-in-use") {
        throw new ClientError("El correo ya está en uso", e.message);
      } else
        throw new ClientError(
          "Ha ocurrido un error con el sistema de cuentas. Por favor intente más tarde.",
          e.message
        );
    } else {
      let message = "";
      if (e instanceof AxiosError) {
        message = e.response?.data.error;
      }
      message = message || (e as Error).message || "Server error";
      throw new ClientError("Credenciales incorrectas", message);
    }
  }
}
