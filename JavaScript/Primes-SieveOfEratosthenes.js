// Using Sieve of Eratosthenes to calculate prime numbers
const primes = (n) => {
  let arr = Array.from({ length: n - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(n)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(
    (x) => (arr = arr.filter((y) => y % x !== 0 || y === x))
  );
  return arr;
};
console.log(primes(100));
// Output: [2,  3,  5,  7, 11, 13, 17, 19,23, 29, 31, 37, 41, 43, 47, 53,
//  59, 61, 67, 71, 73, 79, 83, 89,97]
