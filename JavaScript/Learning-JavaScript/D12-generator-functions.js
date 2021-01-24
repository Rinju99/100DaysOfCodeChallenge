/* A generator function returns an iterator rather than
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

//or you can call it like below..
for (let p of powerOf(5)) {
  if (p > 500) break;
  console.log(p);
}

//Output: 5,15,125
