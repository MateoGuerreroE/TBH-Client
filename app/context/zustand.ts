import { GlobalAlertProps } from "@/components/GlobalAlert";
import { UserLogin } from "@/types/Auth.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type GlobalState = {
  user: UserLogin | null;
  globalAlert: GlobalAlertProps;
  setGlobalAlert: (vals: GlobalAlertProps) => void;
  setUser: (user: UserLogin | null) => void;
};

export const useAppStore = create<GlobalState>()(
  persist<GlobalState>(
    (set) => ({
      globalAlert: { title: "", content: "", timeout: 0, isOpen: false },
      setGlobalAlert: (vals: GlobalAlertProps) =>
        set(() => ({ globalAlert: vals })),
      user: null,
      setUser: (user) => set(() => ({ user })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
