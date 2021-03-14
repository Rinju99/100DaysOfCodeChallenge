// implimenting callback funcation to each element in an array...

const forEvery = (arr, callback) => arr.slice().forEach(callback);

forEvery([1, 2, 3, 4], (x) => console.log(x)); // 1, 2 , 3, 4
forEvery([1, 2, 3, 4], (x) => console.log(x * x)); // 1, 4, 9, 16
forEvery([1, 2, 3, 4], (x) => console.log(2 * x)); // 2, 4, 6, 8
