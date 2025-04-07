import { UserLogin } from "@/types/Auth.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type GlobalState = {
  user: UserLogin | null;
  setUser: (user: UserLogin | null) => void;
};

export const useAppStore = create<GlobalState>()(
  persist<GlobalState>(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
