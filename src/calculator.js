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


  const numbers = text.split(pattern)
  const total = numbers.reduce((acc, num) => (acc + Number(num)), 0);
  return total;

}