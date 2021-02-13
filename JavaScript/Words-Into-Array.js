const toArray = (str, nonChar = /[^a-zA-Z-]+/) => str.split(nonChar);

console.log(toArray("Keep Calm and Code"));
// OUTPUT: ['Keep', 'Calm', 'and', 'Code']
