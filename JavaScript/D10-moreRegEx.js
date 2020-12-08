//Combining regex with special characters..
let word = "|\\| | |\\| J /-\\";
let sentence = "We are JavaScript |\\| | |\\| J /-\\ S";

let escaped = word.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");

console.log(sentence.replace(regexp, '"$&"'));
// Output: We are JavaScript |\\ | |\| J /-| S (NINJAS,lol)

// Extracting the digit from give string using regex
let input = "day no ... 10";
let num = /\b\d+\b/g;
let match;
while ((match = num.exec(input))) {
  console.log("It's your day", match[0] + " of 100DaysOfCode");
}
// It's your day 10 of 100DaysOfCode.
