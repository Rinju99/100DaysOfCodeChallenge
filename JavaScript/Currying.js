// Currying Technique in JS..
const multiply = function (x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
};

multiply(1)(3)(5);
