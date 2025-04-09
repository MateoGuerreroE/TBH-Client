import { UserRegister } from "@/types/Auth.types";
import { ClientError } from "@/types/Exceptions.types";
import app from "@/utils/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { postResource } from "./fetch";

export default async function createUserAction(
  userForm: UserRegister
): Promise<string> {
  try {
    const { password_confirmation, ...userData } = userForm;
    if (!userData.firebase_id) {
      if (userData.password !== password_confirmation) {
        throw new ClientError("Las contraseñas no coinciden");
      }
      const auth = getAuth(app);
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        userForm.email,
        userForm.password
      );
      userData.firebase_id = firebaseUser.user.uid;
    }
    const { data: response } = await postResource<string>(
      `${process.env.NEXT_PUBLIC_API_URL}/access/create_user`,
      userData,
      undefined,
      { cache: "no-store" }
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
          "La autenticación ha fallado internamente. Por favor intente más tarde.",
          e.message
        );
    } else {
      const message = (e as Error).message || "Server error";
      throw new ClientError("Credenciales incorrectas", message);
    }
  }
}
