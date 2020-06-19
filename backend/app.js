const express = require("express");
var MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 5000;

MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
  if (err) throw err;
  console.log(db);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
