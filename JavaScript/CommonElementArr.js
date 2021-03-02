// Find matching value from 2 arays..
const matching = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));
match = matching([1, 2, 3, 5, 7], [1, 2, 4, 7]);
console.log(match); // [ 1, 2, 7 ]
