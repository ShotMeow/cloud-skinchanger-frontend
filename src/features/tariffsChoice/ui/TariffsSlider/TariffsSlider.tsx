import React, { FC } from "react";

import styles from "./TariffsSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { tariffData, TariffItem } from "@/entities/tariff";
import { Autoplay } from "swiper";

import "swiper/css";

const TariffsSlider: FC = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {tariffData.map((tariff) => (
          <SwiperSlide className={styles.slide} key={tariff.title}>
            <TariffItem tariff={tariff} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TariffsSlider;
