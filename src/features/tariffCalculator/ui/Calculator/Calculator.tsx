import React, { FC, useEffect, useState } from "react";
import { Button, Checkbox, Radio } from "@/shared/ui";

import styles from "./Calculator.module.scss";
import { getTrackBackground, Range } from "react-range";
import classNames from "classnames";
import { getDecorationDay } from "@/shared/lib";
import { getCalculatePrice } from "@/features/tariffCalculator/lib/helpers/getCalculatePrice.helper";

export const Calculator: FC = () => {
  const [radioActive, setRadioActive] = useState<number>(1);
  const [customSkins, setCustomSkins] = useState<boolean>(false);
  const [friendVision, setFriendVision] = useState<boolean>(false);
  const [rangeValues, setRangeValues] = useState<number[]>([7]);

  const [price, setPrice] = useState<number>();

  useEffect(() => {
    setPrice(
      getCalculatePrice(
        radioActive as 1 | 2,
        rangeValues[0],
        customSkins,
        friendVision
      )
    );
  }, [radioActive, customSkins, friendVision, rangeValues]);

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
      <div className={styles.rangeWrapper}>
        <h5>Длительность подписки</h5>
        <div className={styles.range}>
          <Range
            min={1}
            max={90}
            step={1}
            onChange={setRangeValues}
            values={rangeValues}
            renderTrack={({ props, children }) => (
              <div
                ref={props.ref}
                className={styles.track}
                style={{
                  background: getTrackBackground({
                    values: rangeValues,
                    colors: ["#CF2C2C", "#131313"],
                    min: 1,
                    max: 90,
                  }),
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props, value, isDragged }) => (
              <div
                className={classNames({
                  [styles.thumb]: true,
                  [styles.active]: isDragged,
                })}
                {...props}
              >
                <p>{getDecorationDay(value)}</p>
              </div>
            )}
          />
        </div>
      </div>
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
        <span>
          <span>{price} ₽</span> за 3 дней
        </span>
      </p>
      <Button variant="primary">Оплатить</Button>
    </form>
  );
};
