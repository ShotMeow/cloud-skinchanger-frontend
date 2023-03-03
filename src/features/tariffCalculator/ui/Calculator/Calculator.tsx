import React, { FC, useState } from "react";
import { Button, Checkbox, Radio } from "@/shared/ui";

import styles from "./Calculator.module.scss";

export const Calculator: FC = () => {
  const [radioActive, setRadioActive] = useState<number>(1);
  const [customSkins, setCustomSkins] = useState<boolean>(false);
  const [friendVision, setFriendVision] = useState<boolean>(false);

  return (
    <form className={styles.calculator}>
      <div>
        <h5>Выбери подписку</h5>
        <label onClick={() => setRadioActive(1)}>
          <Radio
            identifier={1}
            setIsActive={setRadioActive}
            isActive={radioActive === 1}
          />
          <h6>Обычная</h6>
        </label>
        <label onClick={() => setRadioActive(2)}>
          <Radio
            identifier={2}
            setIsActive={setRadioActive}
            isActive={radioActive === 2}
          />
          <h6>Weekend (праздники и выходные)</h6>
        </label>
      </div>
      <div>{/* ToDo: Сделать Input Range длительности подписки */}</div>
      <div>
        <h5>Выбери доп. функции</h5>
        <label onClick={() => setCustomSkins(!customSkins)}>
          <Checkbox setIsActive={setCustomSkins} isActive={customSkins} />
          <h6>Кастомные скины и модели</h6>
        </label>
        <label onClick={() => setFriendVision(!friendVision)}>
          <Checkbox setIsActive={setFriendVision} isActive={friendVision} />
          <h6>Возможность видеть скины друг друга</h6>
        </label>
      </div>
      <p>
        {/* ToDo: Сделать динамический подсчёт цены */}
        <span>
          <span>325 ₽</span> за 3 дней
        </span>
      </p>
      <Button variant="primary">Оплатить</Button>
    </form>
  );
};
