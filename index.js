const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const API = require("./router");
const db = require("./db");

const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(bodyParser.json());
app.use(API);

app.get("/", function(req, res) {
  console.log(res);
  res.json({ hell: "world" });
});

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT);
  })
  .catch(e => {
    console.log(e);
  });
