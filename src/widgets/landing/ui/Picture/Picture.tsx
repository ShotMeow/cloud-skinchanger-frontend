import React, { FC } from "react";

import styles from "./Picture.module.scss";
import Image from "next/image";

import legionCommanderSrc from "@/shared/assets/legion-commander.png";
import dotsSrc from "@/shared/assets/dots.png";

const Picture: FC = () => {
  return (
    <div className={styles.picture}>
      <Image
        className={styles.legion}
        src={legionCommanderSrc}
        alt="Legion Commander"
      />
      <Image className={styles.dots} src={dotsSrc} alt="Background" />
    </div>
  );
};

export default Picture;
