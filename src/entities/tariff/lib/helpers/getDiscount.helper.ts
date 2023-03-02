export const getDiscount = (discount: number): string => {
  return `${Math.round(discount * 100)}%`;
};
