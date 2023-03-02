import { TariffItemType } from "@/entities/tariff/model/tariff.types";

export const tariffData: TariffItemType[] = [
  {
    title: "Пробный",
    price: 10,
    duration: 1,
    discount: 0.25,
    standard: true,
    custom: false,
    visible: false,
  },
  {
    title: "Базовый",
    price: 149,
    duration: 7,
    discount: 0.29,
    standard: true,
    custom: true,
    visible: false,
  },
  {
    title: "Стандарт",
    price: 250,
    duration: 14,
    discount: 0.36,
    standard: true,
    custom: true,
    visible: false,
  },
  {
    title: "Профи",
    price: 449,
    duration: 20,
    discount: 0.45,
    standard: true,
    custom: true,
    visible: true,
  },
  {
    title: "Премиум",
    price: 885,
    duration: 60,
    discount: 0.57,
    standard: true,
    custom: true,
    visible: true,
  },
];
