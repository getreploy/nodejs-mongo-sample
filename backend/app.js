const express = require("express");
var MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 5000;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err) throw err;
  const db = client.db("test");
  db.listCollections().toArray(function (err, collInfos) {
    console.log(collInfos);
    console.log("hi");
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
