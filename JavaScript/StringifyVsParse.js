// Stringify method
// Converts json object into string formate.
let user_json = { name: "Josh", age: 21 };
let user_string = JSON.stringify(user_json);
console.log(user_string); //"{"name":"John","age":31}"

// Parse method
// converts string into a json object...
let toJSON = JSON.parse(user_string);
console.log(toJSON); // {name: "John", age: 31}
