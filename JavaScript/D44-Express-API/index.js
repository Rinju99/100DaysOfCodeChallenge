import Express from "express";
import item from "./items.js";
const app = Express();
const PORT = 8080;

app.get("/item/id:", (req, res) => {
  res.json(
    item.find((items) => {
      return +req.params.id === items.id;
    })
  );
});

app.post("/add", (req, res) => {
  console.log(req.body.id);
  res.sendStatus(200);
});
app.listen(PORT, () => console.log("listening at port 8080"));

//app.delete();
//app.put();
