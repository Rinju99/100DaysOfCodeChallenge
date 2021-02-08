// object destructuring in JavaScript..
const coding = {
  day: "55",
  topic: "object-destructuring",
};

function PrintOut({ day, topic }) {
  console.log(`It's day ${day} and my topic for the day is ${topic}`);
}

// extracting 'day' and 'topic' from 'coding' and calling the function
PrintOut(coding);
// Output: It's my day 55 and my topic for the day is destructuring
