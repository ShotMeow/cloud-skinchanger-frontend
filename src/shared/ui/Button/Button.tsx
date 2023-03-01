import React, { FC, HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Button.module.scss";
import { ButtonVariants } from "@/shared/ui/Button/Button.types";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
}
export const Button: FC<PropsWithChildren<Props>> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        {
          [styles.button]: true,
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
