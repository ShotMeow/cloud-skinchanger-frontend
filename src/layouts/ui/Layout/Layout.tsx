import React, { FC, PropsWithChildren } from "react";
import { Header } from "@/widgets/header";

import styles from "./Layout.module.scss";
import { Footer } from "@/widgets/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
