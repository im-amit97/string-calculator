export const add = (numbers: string): number => {
  if (!numbers) {
    return 0;
  }

  const separator = ',';

  const numberList: string[] = numbers.split(new RegExp(`[${separator}\n]`));

  return numberList.reduce((prev, next) => prev + parseInt(next), 0);
};
