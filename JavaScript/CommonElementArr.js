const matching = (arr, val) => arr.filter((v) => val.includes(v));
match = matching([1, 2, 3, 5, 7], [1, 2, 4, 7]);
console.log(match); /// [ 1, 2, 7 ]
