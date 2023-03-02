import React, { FC, PropsWithChildren } from "react";

import styles from "./Heading.module.scss";

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};
