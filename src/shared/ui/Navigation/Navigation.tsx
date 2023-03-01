import React, { FC } from "react";

import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { navigationItems } from "@/shared/ui/Navigation/Navigation.data";

export const Navigation: FC = () => {
  const { asPath } = useRouter();
  return (
    <nav className={styles.navigation}>
      <ul>
        {navigationItems.map((item) => (
          <li
            className={classNames({
              [styles.active]: item.href === asPath,
            })}
            key={item.href}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
