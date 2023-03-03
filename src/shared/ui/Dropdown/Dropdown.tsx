import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import styles from "./Dropdown.module.scss";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { createFocusTrap } from "focus-trap";

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
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true,
    });

    if (shown) trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [shown]);

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
      <div onClick={(event) => event.stopPropagation()} ref={ref} {...props}>
        {children}
      </div>
    </div>,
    document.getElementById("overlay") as HTMLDivElement
  );
};
