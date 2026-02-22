"use client";

import Image from "next/image";
import css from "./Modal.module.css";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  showBackButton?: boolean;
};

const Modal = ({ children, onClose, showBackButton = false }: Props) => {
  useEffect(() => {
    document.documentElement.scrollIntoView();
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        {showBackButton && (
          <button className={css.goBackBtn} onClick={onClose}>
            <Image src="/circle-left.svg" alt="close" width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
