import { atom } from "jotai";
import { ReactNode } from "react";

interface ModalState {
  component: ReactNode;
  visible: boolean;
}

interface RefreshState {
  refresh: boolean;
}

interface LoginState {
  isLogined: boolean;
}

export const modalContext = atom<ModalState>({
  component: null,
  visible: false,
});

export const refreshContext = atom<RefreshState>({
  refresh: false,
});

export const loginContext = atom<boolean>(false);
