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

  const filterNegatives = numberList.filter((number) => parseInt(number) < 0);

  if (filterNegatives.length > 0) {
    throw new Error("negative numbers not allowed " + filterNegatives.join(','));
  }

  return numberList.reduce((prev, next) => prev + (parseInt(next) || 0), 0);
};
