export const add = (numbers: string): number => {
  if (!numbers) {
    return 0;
  }

  const numberList: string[] = numbers.split(",");

  return numberList.reduce((prev, next) => prev + parseInt(next), 0);
};
