const similarity = (arr, values) => arr.filter((v) => values.includes(v));
s = similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
console.log(s);
