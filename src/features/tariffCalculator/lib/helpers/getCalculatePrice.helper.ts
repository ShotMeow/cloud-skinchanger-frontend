export const getCalculatePrice = (
  subscribeType: 1 | 2,
  duration: number,
  customSkins: boolean,
  friendVision: boolean
) => {
  let price = 0;

  price += duration * 10;

  if (customSkins) price += 300;
  if (friendVision) price += 400;

  switch (subscribeType) {
    case 1:
      price += 300;
      break;
    case 2:
      price = price / 2;
      break;
    default:
      break;
  }

  return price;
};
