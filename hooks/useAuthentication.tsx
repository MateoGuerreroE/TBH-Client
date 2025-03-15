"use client";
import { useGlobalStore } from "@/app/store/zustand";
import { ILoginBase, loginFireBase, loginServer } from "@/hooks/data";
import { FormActionResponse } from "@/types/form";

export const useAuthentication = (): {
  loginUser: (req: ILoginBase) => Promise<FormActionResponse<boolean>>;
  // Add register process here too.
} => {
  const { setUser } = useGlobalStore();
  const loginUser = async (
    req: ILoginBase
  ): Promise<FormActionResponse<boolean>> => {
    try {
      const userToken = await loginFireBase(req.email, req.password);
      const serverAuth = await loginServer(userToken);
      setUser({ ...serverAuth, firebaseToken: userToken });
      return {
        isSuccess: true,
        data: null,
      };
    } catch {
      return {
        isSuccess: false,
        data: null,
      };
    }
  };

  return { loginUser };
};
