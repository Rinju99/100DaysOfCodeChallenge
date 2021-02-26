// Filter out non-unique values...
const unique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(unique([1, 2, 3, 3, 4, 4, 5]));
//Ouput: [1, 2, 5];
