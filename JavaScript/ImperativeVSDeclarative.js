//Imperative Programming...
const num = [1, 2, 3, 4, 5];
const numDoubled = [];
for (let i = 0; i < num.length; i++) {
  numDoubled[i] = num[i] * 2;
}
console.log(numDoubled);

//Declarative Programming...
const number = [1, 2, 3, 4, 5];
const numDouble = number.map((n) => n * 2);
console.log(numDouble);
