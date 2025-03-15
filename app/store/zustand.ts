import { UserInfo } from "@/types/context";
import { create } from "zustand";

interface GlobalState {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  user: null,
  setUser: (value: UserInfo | null) => set({ user: value }),
}));
