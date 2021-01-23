import Express from "express";
const app = Express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(3000);

//app.post();
