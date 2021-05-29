// A method of loading : check if we are running in the production env.

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").parse();
// }

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const configs = require("./configs/configs.dist.json");
const bodyParser = require("body-parser");

//set view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//set other dependencies
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

//create route
app.use("/", indexRouter);
app.use("/authors", authorRouter);

// connect to mongodatabase
const mongoose = require("mongoose");
mongoose
  .connect(configs.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    throw error.stack;
  });

//set up server
const PORT = 3000;
app.listen(process.env.PORT || 3000);
