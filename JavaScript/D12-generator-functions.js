/* A generator function an iterator rather than
 giving a single return value like a normal functino does */

function* powerOf(n) {
  //loop can be called unlimited times
  for (let current = n; ; current *= n) {
    yield current;
  }
}

let p = powerOf(5);

console.log(p.next().value); //5
console.log(p.next().value); //25
console.log(p.next().value); //125
//similarly consecutives values will be returned
