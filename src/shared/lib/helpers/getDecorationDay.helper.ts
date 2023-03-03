export const getDecorationDay = (duration: number): string => {
  if (duration === 1) {
    return `${duration} день`;
  } else if ([2, 3, 4].includes(duration % 10)) {
    return `${duration} дня`;
  } else {
    return `${duration} дней`;
  }
};
