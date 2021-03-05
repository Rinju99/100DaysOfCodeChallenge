// Sorting string in alphabetical order...
const sortString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");

const s = sortString("eaiou");
console.log(s); // aeiou
