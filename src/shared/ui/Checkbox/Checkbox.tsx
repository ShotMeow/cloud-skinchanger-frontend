import React, { FC, HTMLAttributes } from "react";

import styles from "./Checkbox.module.scss";
import classNames from "classnames";
import Check from "@/shared/ui/Icons/Check/Check";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}

export const Checkbox: FC<Props> = ({ isActive, ...props }) => {
  return (
    <div
      className={classNames({
        [styles.checkbox]: true,
        [styles.active]: isActive,
      })}
      {...props}
    >
      <Check />
    </div>
  );
};
