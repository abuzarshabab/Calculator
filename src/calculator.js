export function add (text) {
  if (text === '') {
    return 0;
  };

  if (Number(text)) {
    return Number(text);
  };

  let numbers = text.split(/,|\n/);
  let total = numbers.reduce((acc, num) => (acc + Number(num)), 0);
  return total;

}