import Link from "next/link";
import React, { FC } from "react";

import styles from "./Logo.module.scss";

export const Logo: FC = () => {
  return (
    <h1>
      <Link href="/" className={styles.logo}>
        Cloud <span>Skinchanger</span>
      </Link>
    </h1>
  );
};
