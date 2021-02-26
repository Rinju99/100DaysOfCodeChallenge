// Filter out non-unique values...
// const uniqueValue = (arr) =>
//   arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// console.log(uniqueValue([1, 2, 3, 3, 4, 4, 5]));
// Ouput: [ 1, 2, 5 ]

const unique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(unique([1, 2, 3, 3, 4, 4, 5]));
//Ouput: [1, 2, 5];
