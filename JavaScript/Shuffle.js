// Shuffling a given array elements randomly
const shuffle = (arr) => {
  let l = arr.length;
  while (l) {
    const i = Math.floor(Math.random() * l--);
    console.log(i);
    [arr[l], arr[i]] = [arr[i], arr[l]];
  }
  return arr;
};
const foo = [1, 2, 5, 9, 10, 15, 20];
console.log(shuffle(foo)); // output: random shuffled elements
