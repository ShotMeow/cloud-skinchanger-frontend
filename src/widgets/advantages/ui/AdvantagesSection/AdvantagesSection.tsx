import React, { FC } from "react";

import styles from "./AdvantagesSection.module.scss";
import { AdvantagesItems } from "@/widgets/advantages/ui/AdvantagesItems/AdvantagesItems";
import { Button, Heading } from "@/shared/ui";

export const AdvantagesSection: FC = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <Heading>Преимущества</Heading>
          <p>
            Наш Skinchanger является наиболее продвинутым для Dota 2. Он
            включает в себя полный набор существующих скинов, а так-же авторские
            нововведения. Мы обеспечиваем нашим клиентам максимальную
            безопасность и обратную связь 24/7.
          </p>
          <Button variant="primary">Написать поддержке</Button>
        </div>
        <AdvantagesItems />
      </div>
    </section>
  );
};
