// Sorting an array based on the length of the string...
const sortStrArr = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && temp.length < arr[j].length) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log(arr);
};

sortStrArr(["sorting", "the", "given", "array"]);
// output:  [ 'the', 'given', 'array', 'sorting' ]
