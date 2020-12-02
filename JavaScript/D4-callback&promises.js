//Day4 of 100daysOfCode
const doSomething = (callback) => {
  const result = "the ouput";
  callback(result);
};

//Calling the function
doSomething((result) => {
  console.log(result);
});

// Using Promises for asynchronous execution..
const doSomething = new promise((resolve, reject) => {
  const success = "...";
  if (success) {
    resolve("Do the thing here!");
  } else {
    reject("Error occurred");
  }
});
