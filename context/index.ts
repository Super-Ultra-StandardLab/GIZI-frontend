import { atom } from "jotai";
import { ReactNode } from "react";

interface ModalState {
  component: ReactNode;
  visible: boolean;
}

export const modalContext = atom<ModalState>({
  component: null,
  visible: false,
});
