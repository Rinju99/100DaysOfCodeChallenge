const StringSort = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");
s = StringSort("cabbage"); // 'aabbceg'
console.log(s);
