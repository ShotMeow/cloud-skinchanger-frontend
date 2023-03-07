import React, { FC } from "react";

import styles from "./TariffsList.module.scss";
import { tariffData, TariffItem } from "@/entities/tariff";

const TariffsList: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <p>
          Стоимость <br /> подписки
        </p>
        <p>Длительность</p>
        <p>Скидка</p>
        <p>
          Стандартные <br /> скины и модели
        </p>
        <p>
          Кастомные скины <br /> и модели
        </p>
        <p>
          Возможность видеть <br /> скины друг друга
        </p>
      </li>
      {tariffData.map((tariff) => (
        <li key={tariff.title}>
          <TariffItem tariff={tariff} />
        </li>
      ))}
    </ul>
  );
};

export default TariffsList;
