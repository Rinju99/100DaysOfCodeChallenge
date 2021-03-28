// convert array  -> object.
let fruits = ["foo", "bar", "baz"];
let fruitsObject = { ...fruits };

console.log(fruitsObject);
// { '0': 'foo', '1': 'bar', '2': 'baz' }
