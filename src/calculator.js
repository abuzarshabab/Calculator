export function add (text) {
  if (text === '') {
    return 0;
  };

  if (Number(text)) {
    return Number(text);
  };

  let [num1, num2] = text.split(',');
  return Number(num1) + Number(num2);

}