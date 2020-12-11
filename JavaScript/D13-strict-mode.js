//Strict Mode in JavaScript to catch any hidden errors..

// "use strict";
function guessTheError() {
  // num is not defined below but it works fine
  for (num = 0; num < 5; num++) {
    console.log(num);
  }
}
guessTheError();

// Another example
function ExampleClass(param1) {
  this.param1 = param1;
}
// Missing 'new' keyword below but it still works
let ferdinand = ExampleClass("test");
console.log(param1); // output: test
