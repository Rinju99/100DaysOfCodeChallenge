//function as a parameter that returns a closure..
const spreadOver = (fn) => (args) => fn(...args);

const arr = [1, 2, 3];

const arrayMax = spreadOver(Math.max);
arrayMax(arr); // 3

const arrayMin = spreadOver(Math.min);
arrayMin(arr); // 1
