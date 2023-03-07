import React, { FC } from "react";
import Image from "next/image";
import applicationSrc from "@/shared/assets/application.webp";
import dotsSrc from "@/shared/assets/dots.png";

import styles from "./DownloadPicture.module.scss";

export const DownloadPicture: FC = () => {
  return (
    <div className={styles.picture}>
      <Image
        className={styles.application}
        src={applicationSrc}
        alt="Картинка приложения"
      />
      <Image className={styles.dots} src={dotsSrc} alt="Background" />
    </div>
  );
};
