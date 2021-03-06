const spreadOver = (fn) => (args) => fn(...args);

const arrayMax = spreadOver(Math.max);
console.log(arrayMax([1, 2, 3])); // 3

const arrayMin = spreadOver(Math.min);
console.log(arrayMin([1, 2, 3])); // 1
