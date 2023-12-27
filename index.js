export const getSquare = (num) => {
    return num ** 2;
}

export const isEven = (num) => {
    return (num % 2) === 0;
}

export const castNumber = (value) => {
    const num = Number(value);
    if (isNaN(num)) {
      return 'given value is not convertable';
    }
    return num;
}

export const checkType = (value) => {
    if (value === null) {
        return 'null';
      } else if (Array.isArray(value)) {
        return 'array';
      }
      return typeof value;
}

export const countVowels = (str) => {
    const vowels = /[aeiou]/gi;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}