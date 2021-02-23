//Comparing two JSON-style object in JS...
var obj1 = {
  day: "68",
  topic: "obj comparision",
};
var obj2 = {
  day: "68",
  topic: "obj comparision",
};

JSON.stringify(obj1) === JSON.stringify(obj2);
// True
