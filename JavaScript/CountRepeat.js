// Count how many times an element is repeated in an array..
const countRepeatition = (arr, value) =>
  arr.reduce((total, v) => (v === value ? total + 1 : total), 0);

console.log(countRepeatition([1, 1, 2, 1, 2, 3, 3, 4, 5, 1], 1));
// Output: 4
