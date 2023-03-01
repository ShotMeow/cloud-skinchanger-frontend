import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

import { Props } from "./Button.types";

import styles from "./Button.module.scss";

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
