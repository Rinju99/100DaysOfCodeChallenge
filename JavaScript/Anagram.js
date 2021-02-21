const anagram = (s1, s2) => {
  const check = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("")
      .sort()
      .join("");
  return check(s1) === check(s2);
};

console.log(anagram("Eleven plus two", "Twelve plus one"));
// True
