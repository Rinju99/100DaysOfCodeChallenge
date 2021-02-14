//Find the N largest number of elements from an Array

const nMax = (arr, n = 1) => arr.sort((a, b) => b - a).slice(0, n);

console.log(nMax([1, 3, 15, 9, 7], 3)); // [ 15,9,7 ]
