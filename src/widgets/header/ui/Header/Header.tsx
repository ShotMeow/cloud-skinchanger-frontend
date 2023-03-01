import React, { FC } from "react";

import { HeaderDesktop } from "@/widgets/header/ui/HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "@/widgets/header/ui/HeaderMobile/HeaderMobile";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  );
};
