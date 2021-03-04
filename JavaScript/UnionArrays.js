// Union of two arrays in JS..
const arrUnion = (a, b, func) => {
  const s = new Set(a.map(func));
  return new Set([...a, ...b.filter((x) => !s.has(func(x)))]);
};
console.log(arrUnion([1, 5, 7], [1, 7, 13], Math.floor));
// [ 1, 5, 7, 13 ]
