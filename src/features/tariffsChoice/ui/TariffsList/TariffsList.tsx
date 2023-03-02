import React, { FC } from "react";

import styles from "./TariffsList.module.scss";
import { tariffData, TariffItem } from "@/entities/tariff";

const TariffsList: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <h4>
          Стоимость <br /> подписки
        </h4>
        <h4>Длительность</h4>
        <h4>Скидка</h4>
        <h4>
          Стандартные <br /> скины и модели
        </h4>
        <h4>
          Кастомные скины <br /> и модели
        </h4>
        <h4>
          Возможность видеть <br /> скины друг друга
        </h4>
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
