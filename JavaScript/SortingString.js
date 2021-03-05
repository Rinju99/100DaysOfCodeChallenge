const sortString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");

const s = sortString("axbre"); // 'aabbceg'
console.log(s);
