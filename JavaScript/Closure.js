const countDuplicate = (str) => {
  var count = {};
  var arr = str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g);

  arr.forEach((e) => {
    count[e[0]] = e.length;
  });

  return count;
};

countDuplicate("KeepCalmAndCode");
// Output: { a: 2, c: 2, d: 2, e: 3 }
