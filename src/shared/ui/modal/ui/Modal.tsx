import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import classNames from "classnames";

import { Button } from "../../button";
import styles from "./Modal.module.scss";
import React, { ReactNode } from "react";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";

interface ModalProps {
  isOpen: boolean;
  title:string;
  children: ReactNode;
  action: () => void;
  close: () => void;
}

export function Modal(props: ModalProps) {
  const { isOpen ,children,title,close,action} = props;
  const modalRef = React.useRef(null);
  useOutsideClick(modalRef,close);

  const onClickButton = () => {
    action();
    close();
  }
  
  return (
    <Dialog
      open={isOpen}
      as="div"
      className={classNames(styles.layout, { [styles.open]: isOpen })}
      onClose={close}
      ref={modalRef}
    >
      <div className={classNames(styles.modal, { [styles.openModal]: isOpen })}>
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel transition>
            <DialogTitle as="h3" className={styles.title}>{title}</DialogTitle>
            <p className={styles.text}>{children}</p>

            <Button className={styles.button} onClick={onClickButton}>
              Confirm & Delete
            </Button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
