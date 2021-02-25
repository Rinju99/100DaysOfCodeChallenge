// Count how many times an element is repeated..
const countRepeatition = (arr, val) =>
  arr.reduce((i, v) => (v === val ? i + 1 : i), 0);

console.log(countRepeatition([1, 1, 2, 1, 2, 3, 3, 4, 5, 1], 1));
