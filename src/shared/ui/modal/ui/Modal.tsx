import { Dialog } from "@headlessui/react";

import classNames from "classnames";
import { ReactNode, useRef } from "react";

import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  close: () => void;
}

export function Modal(props: ModalProps) {
  const { isOpen, children, close } = props;
  const modalRef = useRef(null);
  useOutsideClick(modalRef, close);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className={classNames(styles.layout)}
      onClose={close}
      transition
    >
      <div ref={modalRef} className={classNames(styles.modal)}>
        {children}
      </div>
    </Dialog>
  );
}
