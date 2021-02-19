//Imperative Programming:How to achieve Sth
const num = [1, 2, 3, 4, 5];
const numDoubled = [];
for (let i = 0; i < num.length; i++) {
  numDoubled[i] = num[i] * 2;
}
console.log(numDoubled); //[ 2, 4, 6, 8, 10 ]

//Declarative Programming: What should be achieved
const number = [1, 2, 3, 4, 5];
const numDouble = number.map((n) => n * 2);
console.log(numDouble); //[ 2, 4, 6, 8, 10 ]
