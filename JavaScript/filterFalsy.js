// Filter out falsy values..
const noFlasy = (arr) => arr.filter(Boolean);
const output = noFlasy([0, 1, false, "", NaN, "a", 4, null]);

console.log(output); // [ 1, 'a', 4 ]
