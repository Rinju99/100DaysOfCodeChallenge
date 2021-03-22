// Memoization technique in action...
const memoized = () => {
  let cache = {};
  return (i) => {
    if (i in cache) {
      console.log("taking from cache");
      return cache[i];
    } else {
      console.log("Calculating the result");
      let output = i + 10;
      cache[i] = output;
      return output;
    }
  };
};
const memo = memoized();
console.log(memo(5)); //Calculating the result 15
console.log(memo(5)); //taking from cache 15
