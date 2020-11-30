//A Simple JavaScript Object..
const car = {
  color: "black",
  brand: {
    name: "Ford", //nested object
    model: "Focus",
  },
  year: "2020",
  description: function () {
    console.log(
      `This is ${this.brand.name} ${this.brand.model} made in ${this.year}`
    );
  },
};

car.description();

car.color = "Blue"; //update the color
car.brand.model = "Fiesta";
car.year = 2018;

car.description();
//Output1: This is ford focus made in 2020
//Output2: This is ford fiesta made in 2018
