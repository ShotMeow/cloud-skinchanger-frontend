import React, { FC, HTMLAttributes } from "react";

import styles from "./Radio.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  identifier: number;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
}

export const Radio: FC<Props> = ({
  identifier,
  isActive,
  setIsActive,
  ...props
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      setIsActive(identifier);
    }
  };

  return (
    <div
      className={classNames({
        [styles.radio]: true,
        [styles.active]: isActive,
      })}
      tabIndex={0}
      onKeyDown={(event) => handleKeyDown(event)}
      {...props}
    >
      <div></div>
    </div>
  );
};
