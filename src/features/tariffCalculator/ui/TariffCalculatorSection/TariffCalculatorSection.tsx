import React, { FC } from "react";

import styles from "./TariffCalculatorSection.module.scss";
import { Calculator } from "@/features/tariffCalculator/ui/Calculator/Calculator";

export const TariffCalculatorSection: FC = () => {
  return (
    <section className={styles.section}>
      <p>ИЛИ</p>
      <h2>Подбери удобный план</h2>
      <Calculator />
    </section>
  );
};
