//Remove Non-ASCII character from a string
const onlyASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
const char = onlyASCII("äOÄénlÉêy-ASöÖÐCIþúIÚ");
console.log(char); //output: 'Only-ASCII'
