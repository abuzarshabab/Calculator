export function add (text) {
  if (text === '') {
    return 0;
  };

  if (Number(text)) {
    return Number(text);
  };
}