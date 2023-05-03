const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5180;

const chefData = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("check");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefData.find((chef) => chef.chefId === parseInt(id));
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`listening from port ${port}`);
});
