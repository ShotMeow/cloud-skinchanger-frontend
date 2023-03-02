import React, { FC, HTMLAttributes } from "react";

import styles from "./Radio.module.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}

export const Radio: FC<Props> = ({ isActive, ...props }) => {
  return (
    <div
      className={classNames({
        [styles.radio]: true,
        [styles.active]: isActive,
      })}
      {...props}
    >
      <div></div>
    </div>
  );
};
