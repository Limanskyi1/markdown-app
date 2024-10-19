import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      type="button"
      className={classNames(styles.button, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
