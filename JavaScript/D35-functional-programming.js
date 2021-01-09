// Functional Programming Paradigm..
const list = [1, 2, 3, 4, 5];

//functional way of incremneting elements of list by 1
// rather than using a for loop
const incrementor = list.map((item) => item + 1);
console.log(incrementor);

// functional way of finding sum of elements in a list..
let sum = list.reduce((accumulator, item) => {
  return accumulator + item;
}, 0);

console.log(sum);
