export const add = (numbers: string): number => {
  if (!numbers) {
    return 0;
  }

  let separator = ",";

  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      separator = match[1]; // return new delimiter based on match
      numbers = numbers.slice(match[0].length);
    }
  }

  const numberList: string[] = numbers.split(new RegExp(`[${separator}\n]`));

  return numberList.reduce((prev, next) => prev + parseInt(next), 0);
};
