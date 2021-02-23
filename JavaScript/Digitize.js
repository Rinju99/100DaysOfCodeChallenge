// Convert a number into an array of digits...

const numberToArray = (n) => [...`${n}`].map((x) => parseInt(x));

numberToArray(123);
//Output: [ 1, 2, 3 ]
