const toArray = (str, ptrn = /[^a-zA-Z-]+/) 
              => str.split(ptrn).filter(Boolean);

console.log(toArray("Its a new day"));
console.log(toArray("Keep Calm and Code"));
