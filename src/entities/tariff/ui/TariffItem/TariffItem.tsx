import React, { FC } from "react";

import styles from "./TariffItem.module.scss";
import Check from "@/shared/ui/Icons/Check/Check";
import classNames from "classnames";
import { TariffItemType } from "@/entities/tariff/model/tariff.types";
import { getDiscount } from "@/entities/tariff/lib/helpers/getDiscount.helper";
import { getDuration } from "@/entities/tariff/lib/helpers/getDuration.helper";
import { useDispatch, useSelector } from "react-redux";
import { setTariff } from "@/entities/tariff/model/tariff.slice";

interface Props {
  tariff: TariffItemType;
}

export const TariffItem: FC<Props> = ({ tariff }) => {
  const dispatch = useDispatch();
  const currentTariff = useSelector(
    (state: RootState) => state.tariff.currentTariff
  );

  const handleClick = () => {
    dispatch(setTariff(tariff));
  };

  return (
    <article
      className={classNames({
        [styles.tariff]: true,
        [styles.active]: currentTariff?.title === tariff.title,
      })}
      onClick={() => handleClick()}
    >
      <h5>{tariff.title}</h5>
      <p>{tariff.price}₽</p>
      <p>{getDuration(tariff.duration)}</p>
      <p>{getDiscount(tariff.discount)}</p>
      <span
        className={classNames({
          [styles.active]: tariff.standard,
        })}
      >
        <Check />
      </span>
      <span
        className={classNames({
          [styles.active]: tariff.custom,
        })}
      >
        <Check />
      </span>
      <span
        className={classNames({
          [styles.active]: tariff.visible,
        })}
      >
        <Check />
      </span>
    </article>
  );
};
