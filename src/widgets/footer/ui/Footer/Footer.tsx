import React, { FC } from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Button, Gmail, Instagram, Telegram, Vk } from "@/shared/ui";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <h5>Разделы</h5>
          <ul>
            <li>
              <Link href="/download">Скачать</Link>
            </li>
            <li>
              <Link href="/subscribe">Подписка</Link>
            </li>
            <li>
              <Link href="/support">Поддержка</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Пользователям и партнёрам</h5>
          <ul>
            <li>
              <Link href="/download">Правила</Link>
            </li>
            <li>
              <Link href="/subscribe">О проекте</Link>
            </li>
            <li>
              <Link href="/support">Пользовательское соглашение</Link>
            </li>
            <li>
              <Link href="/support">Политика конфиденциальности</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Мы в социальных сетях</h5>
          <ul>
            <li>
              <Link href="https://vk.com/shotmeow">
                <Vk />
              </Link>
            </li>
            <li>
              <Link href="https://t.me/shotmeow">
                <Telegram />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="mailto:shotmeow@gmail.com">
                <Gmail />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Поддержка</h5>
          <Button variant="primary">Написать в чате</Button>
        </div>
      </div>
      <p>© 2023 Cloud Skinchanger. Все права защищены.</p>
    </footer>
  );
};
