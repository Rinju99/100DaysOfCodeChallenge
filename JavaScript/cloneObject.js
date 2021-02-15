//Different ways to clone an Object in JS
var myObj = {
  day: "62",
  topic: "clonning",
};

//clone using JSON.stringify
var clone1 = JSON.parse(JSON.stringify(myObj));
//clone using Objec.assign
var clone2 = Object.assign({}, myObj);
// Using object spreader
var clone3 = { ...oldObj };
