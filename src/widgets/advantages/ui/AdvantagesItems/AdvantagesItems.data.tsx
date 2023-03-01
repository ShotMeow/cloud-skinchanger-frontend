import { AdvantagesItemType } from "@/widgets/advantages/ui/AdvantagesItems/AdvantagesItems.types";
import { Management, Optimization, Save, Security } from "@/shared/ui";

export const advantagesItems: AdvantagesItemType[] = [
  {
    title: "Максимальная надежность",
    icon: <Security />,
  },
  {
    title: "Удобное управление",
    icon: <Management />,
  },
  {
    title: "Оптимизация для слабых ПК",
    icon: <Optimization />,
  },
  {
    title: "Сохранение в облаке",
    icon: <Save />,
  },
];
