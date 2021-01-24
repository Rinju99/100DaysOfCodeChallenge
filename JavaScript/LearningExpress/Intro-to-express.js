const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Let's learn Express");
});

app.listen(PORT, () => console.log("Listening at port" + PORT));
