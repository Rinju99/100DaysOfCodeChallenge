// A function to test armstrong number..
function armstrongNum(num) {
  const str = num + "";
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(Number(str[i]), str.length);
  }
  return sum === num;
}

console.log(armstrongNum(153)); // true
console.log(armstrongNum(1634)); // true
