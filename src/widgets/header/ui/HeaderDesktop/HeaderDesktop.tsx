import React, { FC } from "react";

import styles from "./HeaderDesktop.module.scss";
import { Button, Logo } from "@/shared/ui";
import Navigation from "@/widgets/header/ui/Navigation/Navigation";

export const HeaderDesktop: FC = () => {
  return (
    <header className={styles.desktop}>
      <Logo />
      <Navigation />
      <Button className={styles.authorize} variant="primary">
        Авторизация
      </Button>
    </header>
  );
};
