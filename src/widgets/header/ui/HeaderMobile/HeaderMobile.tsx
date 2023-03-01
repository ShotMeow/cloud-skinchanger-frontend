import React, { FC, useRef, useState } from "react";
import dynamic from "next/dynamic";

import styles from "./HeaderMobile.module.scss";
import { Burger, Button, Logo, Navigation } from "@/shared/ui";

const Dropdown = dynamic(
  () => import("@/shared/ui").then((mod) => mod.Dropdown),
  {
    ssr: false,
  }
);

export const HeaderMobile: FC = () => {
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  return (
    <>
      <header className={styles.mobile}>
        <Logo />
        <button
          onClick={() => setDropdownShown(!dropdownShown)}
          className={styles.burger}
        >
          <Burger />
        </button>
      </header>
      <Dropdown
        className={styles.dropdown}
        shown={dropdownShown}
        setShown={setDropdownShown}
      >
        <Navigation />
        <Button variant="primary">Авторизация</Button>
      </Dropdown>
    </>
  );
};
