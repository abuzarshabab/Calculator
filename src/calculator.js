export function add (text) {
  if (text === '') {
    return 0;
  };

  let pattern =  /,|\n/;

  if (text.startsWith('//')) {
    const parts = text.split('\n');
    pattern = new RegExp(parts[0].slice(2))
    text = parts[1];
  }

  const numbers = text.split(pattern).map((num) => Number(num))
  const negativeList = numbers.filter(num => num < 0);

  if (negativeList.length) {
    throw new Error(`negative numbers not allowed: ${negativeList.join(', ')}`);
  }

  const total = numbers.reduce((acc, num) => (acc + num), 0);
  return total;

}