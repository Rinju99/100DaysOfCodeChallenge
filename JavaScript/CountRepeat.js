const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(countOccurrences([1, 1, 2, 1, 2, 3, 3, 4, 5], 1));
