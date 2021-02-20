// Intersection(common elements) between two arrays...
const intersection = (a, b) => {
  const _setB = new Set(b);
  return a.filter((x) => _setB.has(x));
};

console.log(intersection([1, 2, 3, 7, 9], [1, 3, 5, 9]));
// [1,3,9]
