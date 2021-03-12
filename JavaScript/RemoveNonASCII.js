//Remove Non-ASCII character..
const onlyASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
const char = onlyASCII("äOÄénlÉêy-ASöÖÐCIþúIÚ");
console.log(char); // 'Only-ASCII'
