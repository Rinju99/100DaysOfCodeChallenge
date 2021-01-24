const express = require("express");
const app = express();

//global middlewares, they execute in orders they are declared.
app.use(middleWareNum1);
app.use(middlewareNum2);

function middleWareNum1(request, response, next) {
  console.log("This is middleware-1");
  next(); //jump to the next middleware
}
function middlewareNum2(req, res, next) {
  console.log("This is middleward-2");
  next();
}

app.get("/", (req, res, next) => {
  res.send("<h1>Day 45</h1>");
  console.log("Get route!");
});

app.listen(3000);
