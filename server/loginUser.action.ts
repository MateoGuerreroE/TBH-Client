"use server";

import { LoginForm, UserLogin } from "@/types/Auth.types";
import { ServerResponse } from "@/types/Data.types";
import axios, { AxiosError } from "axios";
import app from "@/utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ClientError } from "@/types/Exceptions.types";

export async function loginUserAction(
  formData?: LoginForm,
  token?: string
): Promise<UserLogin> {
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
      throw new ClientError("Insufficient data to login user");
    }
    const { data: response } = await axios.post<ServerResponse<UserLogin>>(
      `${process.env.NEXT_PUBLIC_API_URL}/access/login`,
      { token: userToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    let message = "";
    if (e instanceof AxiosError) {
      message = e.response?.data.error;
    }
    message = message || (e as Error).message || "Error de servidor";
    throw new ClientError(message);
  }
}
