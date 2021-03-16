// find all the indeces of given element in an array..
// By using reduce function..
const indices = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
console.log(indices([3, 4, 3, 5, 7, 9, 3], 3)); // [0, 2, 6]
