import React, { FC } from "react";

import styles from "./DownloadSection.module.scss";
import { Button, Mac, Windows } from "@/shared/ui";
import { DownloadPicture } from "@/widgets/download/ui/DownloadPicture/DownloadPicture";

export const DownloadSection: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h2>Попробуй бесплатно</h2>
        <p>
          При первом использовании нашего Скинчейнджера вы получаете 7 дней
          пробного периода и доступ к основным функциям приложения. Это значит,
          что вы сможете опробовать функционал нашего приложения абсолютно
          бесплатно. Наслаждайтесь!
        </p>
        <div className={styles.actions}>
          <div>
            <Button variant="primary">
              <Windows />
              Windows
            </Button>
            <p>Windows 7, 8 и выше</p>
          </div>
          <Button variant="primary">
            <Mac />
            MacOS
          </Button>
        </div>
      </div>
      <DownloadPicture />
    </section>
  );
};
