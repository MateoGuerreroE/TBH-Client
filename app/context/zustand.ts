import { GlobalAlertProps } from "@/components/GlobalAlert";
import { testUserCart } from "@/test/sampleData";
import { UserLogin } from "@/types/Auth.types";
import { CartProduct } from "@/types/Context.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type GlobalState = {
  user: UserLogin | null;
  globalAlert: GlobalAlertProps;
  setGlobalAlert: (vals: GlobalAlertProps) => void;
  setUser: (user: UserLogin | null) => void;
};

export type GlobalNPState = {
  userCart: CartProduct[];
  setUserCart: (cart: CartProduct[]) => void;
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

export const useNPStore = create<GlobalNPState>((set) => ({
  userCart: testUserCart,
  setUserCart: (cart: CartProduct[]) => set(() => ({ userCart: cart })),
}));
