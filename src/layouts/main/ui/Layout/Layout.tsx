import React, { FC, PropsWithChildren } from "react";
import { Header } from "@/widgets/header";

import styles from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};
