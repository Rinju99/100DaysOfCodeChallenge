// Intersection(common elements) between two arrays...

const intersection = (arr1, arr2) => {
  const _set = new Set(arr2);
  return arr1.filter((x) => _set.has(x));
};

console.log(intersection([1, 2, 3, 7, 9], [1, 3, 5, 9]));
// [1,3,9]
