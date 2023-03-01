import React, { FC } from "react";

import styles from "./HeaderMobile.module.scss";
import { Burger, Logo } from "@/shared/ui";

export const HeaderMobile: FC = () => {
  return (
    <header className={styles.mobile}>
      <Logo />
      <button className={styles.burger}>
        <Burger />
      </button>
    </header>
  );
};
