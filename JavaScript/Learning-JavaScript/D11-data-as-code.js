//Evaluating Data as Code..
//JavaScript

const x = 1;
let stringEvaluator = (str) => {
  eval(str);
  return x;
};
console.log(stringEvaluator("var x = 11"));
console.log(stringEvaluator("var x = 2"));
//output: 11
//output: 2
let addTen = Function("n", "return n + 10;");
console.log(addTen(1));
//output: 11
