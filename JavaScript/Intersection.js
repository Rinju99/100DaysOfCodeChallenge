// Intersection(common elements) between two arrays...

const intersection = (arr1, arr2) => arr1.filter((x) => arr2.includes(x));

console.log(intersection([1, 2, 3, 7, 9], [1, 3, 5, 9]));
// [1,3,9]
