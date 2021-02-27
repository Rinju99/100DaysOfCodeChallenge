// Various ways to use spread operators in JS.
// with a function...
const addUp = (a, b, c) => a + b + c;
const num = [1, 2, 3];
console.log(addUp(...num));

//As arrray concatenation..
let array1 = [0, 3, 5];
let array2 = [1, 2, 4];
array3 = [...array1, ...array2];

//with object to make a clone of it..
let obj1 = { id: "1", name: "John" };
let obj2 = { ...obj1 };
