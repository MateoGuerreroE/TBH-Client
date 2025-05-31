import { GlobalAlertProps } from "@/app/components/shared/GlobalAlert";
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
  incrementProduct: (productId: string) => void;
  decrementProduct: (productId: string) => void;
  addToCart: (product: CartProduct) => void;
  clearCart: () => void;
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
  addToCart: (cartItem: CartProduct) =>
    set((state) => {
      const productIndex = state.userCart.findIndex(
        (item) => item.product.productId === cartItem.product.productId
      );
      if (productIndex !== -1) {
        const updatedCart = [...state.userCart];
        updatedCart[productIndex].amount += cartItem.amount;
        return { userCart: updatedCart };
      } else {
        return { userCart: [...state.userCart, cartItem] };
      }
    }),
  incrementProduct: (productId: string) =>
    set((state) => {
      const productIndex = state.userCart.findIndex(
        (item) => item.product.productId === productId
      );
      if (productIndex !== -1) {
        const updatedCart = [...state.userCart];
        updatedCart[productIndex].amount += 1;
        return { userCart: updatedCart };
      } else throw new Error("Product not found in cart");
    }),
  decrementProduct: (productId: string) =>
    set((state) => {
      const productIndex = state.userCart.findIndex(
        (item) => item.product.productId === productId
      );
      if (productIndex !== -1) {
        const updatedCart = [...state.userCart];
        if (updatedCart[productIndex].amount > 1) {
          updatedCart[productIndex].amount -= 1;
          return { userCart: updatedCart };
        } else {
          updatedCart.splice(productIndex, 1);
          return { userCart: updatedCart };
        }
      } else throw new Error("Product not found in cart");
    }),
  clearCart: () => set(() => ({ userCart: [] })),
  setUserCart: (cart: CartProduct[]) => set(() => ({ userCart: cart })),
}));
