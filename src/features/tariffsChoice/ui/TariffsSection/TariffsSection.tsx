import React, { FC, useState } from "react";

import styles from "./TariffsSection.module.scss";
import { Button, Checkbox, Heading } from "@/shared/ui";
import TariffsList from "@/features/tariffsChoice/ui/TariffsList/TariffsList";
import TariffsSlider from "@/features/tariffsChoice/ui/TariffsSlider/TariffsSlider";
import Link from "next/link";

export const TariffsSection: FC = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  return (
    <section className={styles.section}>
      <Heading>Выбери готовый тариф</Heading>
      <TariffsList />
      <TariffsSlider />
      <label onClick={() => setIsSubmit(!isSubmit)}>
        <Checkbox setIsActive={setIsSubmit} isActive={isSubmit} />
        <p>
          Соглашаюсь с <Link href="/">лицензионным договором</Link>
          <br /> и продлением подписки
        </p>
      </label>
      <Button variant="primary">Продолжить</Button>
    </section>
  );
};
