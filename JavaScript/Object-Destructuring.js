// object destructuring in JavaScript..

const coding = {
  day: "55",
  topic: "destructuring",
};

function PrintOut({ day, topic }) {
  console.log(`THis is my day ${day} and my topic for the day is ${topic}`);
}

PrintOut(coding);
