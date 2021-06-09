const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cons = require("consolidate");
const dust = require("dustjs-helpers");
const { Client } = require("pg");
const pg = require("pg");
const app = express();

//Connect with the database
const client = new Client();
client.connect();
const res = client.query("SELECT $1::text as message", ["Hello world!"]);
console.log(res.rows[0].message); // Hello world!
client.end();

// Assign Dust ENGINE to .dust files
app.engine("dust", cons.dust);

//Set Default extention
app.set("view engine", "dust");
app.set("views", __dirname + "/views");

//Set pulic folder
app.use(express.static(path.join(__dirname, "public")));

//Body Paser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route
app.get("/", (request, response) => {
  // console.log("TEST");
  response.render("index");
});

// create server
app.listen(3000, () => {
  console.log("servr started on 3000");
});
