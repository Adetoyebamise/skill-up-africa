const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");

//Test db
db.authenticate()
  .then(() => console.log("database connected"))
  .catch((error) => {
    throw error;
  });

// init
const app = express();

// route
app.get("/", (request, response) => {
  response.send("Index");
});

//Handlebars
app.engine("handlebars", epxhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Gig route
app.use("/gigs", require("./routes/gigs"));

//server
app.listen(3000, () => {
  console.log("server running");
});
