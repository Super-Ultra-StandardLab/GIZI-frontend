"use client";

import { useAtomValue } from "jotai";
import { modalContext } from "@/context/index";
import "../styles.css";
import useModal from "@/hooks/useModal";

const Modal = () => {
  const { component, visible } = useAtomValue(modalContext);
  const { closeModal } = useModal();

  if (visible)
    return (
      <section className="background" onClick={() => closeModal()}>
        {component}
      </section>
    );
};

export default Modal;
