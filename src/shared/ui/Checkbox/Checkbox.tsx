import React, { FC, HTMLAttributes } from "react";

import styles from "./Checkbox.module.scss";
import classNames from "classnames";
import Check from "@/shared/ui/Icons/Check/Check";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox: FC<Props> = ({ isActive, setIsActive, ...props }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      className={classNames({
        [styles.checkbox]: true,
        [styles.active]: isActive,
      })}
      tabIndex={0}
      onKeyDown={(event) => handleKeyDown(event)}
      {...props}
    >
      <Check />
    </div>
  );
};
