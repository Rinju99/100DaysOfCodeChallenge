// Stringify...
// Converts json object into string formate.
var user_json = { name: "Josh", age: 21 };
var user_string = JSON.stringify(user_json);
console.log(user_string); //"{"name":"John","age":31}"

// Parse method
// converts string into a json object...
var user_json = JSON.parse(user_string);
console.log(user_json); // {name: "John", age: 31}
