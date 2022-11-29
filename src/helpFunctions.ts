export const strToNumber = (str: string) => {
  const isValid = !/\D+/g.test(str); // valid if it doesn't have any non-number characters
  
  if (isValid) {
    return str as any * 1 as number;
  }

  return NaN;
};