//Day-6
//Abstration and higher-order-functions..
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function unless(condition, then) {
  if (!condition) {
    then();
  }
}

repeat(5, (n) => {
  unless(n % 2 == 0, () => {
    console.log(n, "is an odd number.");
  });
});

//output:
// 1 is an odd number
// 3 is an odd number
