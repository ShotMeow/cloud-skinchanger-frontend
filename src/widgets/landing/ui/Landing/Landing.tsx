import React, { FC } from "react";

import styles from "./Landing.module.scss";
import Picture from "@/widgets/landing/ui/Picture/Picture";
import { Button } from "@/shared/ui";
import Image from "next/image";

import applicationSrc from "@/shared/assets/application.webp";

const Landing: FC = () => {
  return (
    <section className={styles.landing}>
      <Picture />
      <div className={styles.text}>
        <h2>
          Cloud <span>Skinchanger</span> - инновационный <br /> инструмент по
          смене скинов <span>Dota 2</span>.
        </h2>
        <p>
          Хватит тратить огромные деньги на покупку понравившейся вещи на героя,
          благодаря нашему сервису ты сможешь получить абсолютно все скины,
          которые только есть в игре.
        </p>
        <Button variant="primary">Попробовать бесплатно</Button>
      </div>
      <div className={styles.text}>
        <h3>
          О нашей <span>программе</span>
        </h3>
        <p>
          Мы работаем по принципу подписки. Покупаешь подписку и для тебя
          открыты все скины и даже больше. Неправда ли дешевле?
        </p>
        <p>
          Удобный интерфейс, полная безопасность, техническая поддержка 24/7
        </p>
      </div>
      <Image src={applicationSrc} alt={"Иллюстрация приложения"} />
    </section>
  );
};

export default Landing;