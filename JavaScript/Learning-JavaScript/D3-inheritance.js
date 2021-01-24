// Day3
// Simple class and inheritance in JS
class Day3A {
  constructor(day) {
    this.day = day;
  }
  days() {
    return "This is " + this.day + " part-A";
  }
}

class Day3B extends Day3A {
  days() {
    return super.days() + " and part-B combined";
  }
}
const d = new Day3B("day3");

//Output: This is day3 part-1 and part-2 combined..
