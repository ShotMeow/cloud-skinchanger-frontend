import React, { FC } from "react";

import styles from "./AdvantagesItems.module.scss";
import { advantagesItems } from "@/widgets/advantages/ui/AdvantagesItems/AdvantagesItems.data";

export const AdvantagesItems: FC = () => {
  return (
    <ul className={styles.advantages}>
      {advantagesItems.map((item) => (
        <li key={item.title}>
          <div className={styles.icon}>{item.icon}</div>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};
