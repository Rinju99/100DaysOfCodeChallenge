const spreadOver = (fn) => (argsArr) => fn(...argsArr);
const arrayMax = spreadOver(Math.min);
console.log(arrayMax([1, 2, 3])); // 3
