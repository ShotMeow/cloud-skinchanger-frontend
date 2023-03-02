import React, { FC } from "react";

import styles from "./TariffCalculatorSection.module.scss";
import { Heading } from "@/shared/ui";
import { Calculator } from "@/features/tariffCalculator/ui/Calculator/Calculator";

export const TariffCalculatorSection: FC = () => {
  return (
    <section className={styles.section}>
      <Heading>ИЛИ</Heading>
      <Heading>Подбери удобный план</Heading>
      <Calculator />
    </section>
  );
};
