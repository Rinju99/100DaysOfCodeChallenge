/* Reading a text file.... */
let { readFile } = require("fs");
readFile("./file.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});

/* writing a file to disk */
const { writeFile } = require("fs");
writeFile("practice.txt", "Node was here", (err) => {
  if (err) console.log(`Something went wrong: ${err}`);
  else console.log("The file has been written successfully.");
});
