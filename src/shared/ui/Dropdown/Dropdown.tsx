import React, { FC, HTMLAttributes, PropsWithChildren, useEffect } from "react";

import styles from "./Dropdown.module.scss";
import classNames from "classnames";
import { createPortal } from "react-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dropdown: FC<PropsWithChildren<Props>> = ({
  shown,
  setShown,
  children,
  ...props
}) => {
  useEffect(() => {
    const documentKeydownListener = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShown(false);
    };

    document.addEventListener("keydown", documentKeydownListener);

    return () => {
      document.removeEventListener("keydown", documentKeydownListener);
    };
  }, [setShown]);

  return createPortal(
    <div
      className={classNames({
        [styles.overlay]: true,
        [styles.shown]: shown,
      })}
      onClick={() => setShown(false)}
    >
      <div onClick={(event) => event.stopPropagation()} {...props}>
        {children}
      </div>
    </div>,
    document.getElementById("overlay") as HTMLDivElement
  );
};
