// Check if a number is prime..
const isPrime = (n) => {
  const boundary = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= boundary; i++) return n % i != 0 && n >= 2;
};

isPrime(50); //false
isPrime(41); // True
