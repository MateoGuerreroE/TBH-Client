import { testUserCart } from "@/test/sampleData";
import { CartProduct } from "@/types/Context.types";
import {
  IAdminLoginData,
  ICategoriesWithProducts,
  IUserLoginData,
} from "tbh-shared-types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface InitialPayload {
  data: ICategoriesWithProducts[] | null;
  ttl: number;
}

export type GlobalState = {
  user: IUserLoginData | IAdminLoginData | null;
  setUser: (user: IUserLoginData | IAdminLoginData | null) => void;
  visitorToken: string | null;
  setVisitorToken: (token: string | null) => void;
  isAsyncLoading: boolean;
  setIsAsyncLoading: (loading: boolean) => void;
  initialPayload: InitialPayload;
  setInitialPayload: (
    data: ICategoriesWithProducts[] | null,
    ttl: number
  ) => void;
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
      user: null,
      isAsyncLoading: false,
      setIsAsyncLoading: (loading) => set(() => ({ isAsyncLoading: loading })),
      setUser: (user) => set(() => ({ user })),
      visitorToken: null,
      setVisitorToken: (token) => set(() => ({ visitorToken: token })),
      initialPayload: {
        ttl: 0,
        data: null,
      },
      setInitialPayload: (data, ttl) =>
        set(() => ({ initialPayload: { data, ttl } })),
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
