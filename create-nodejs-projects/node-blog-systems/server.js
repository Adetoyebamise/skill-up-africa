const express = require("express");
const app = express();
const methodOverride = require("method-override");
const articleRouter = require("./routes/articles");
const Article = require("./models/article");
// mongoose connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:3000/blogdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    "connection okay";
  })
  .catch((error) => {
    throw error.reason;
  });

// set view directory
app.set("views", "./views/articles");

// set view engine
app.set("view engine", "ejs");

//Accessing the article schema from articles.js file
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// create route to articles
app.use("/articles", articleRouter);

// create route
app.get("/", async (request, response) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  // test article
  // let articles = [
  //   {
  //     title: "Test Article 1",
  //     createdAt: new Date(),
  //     description: "Test description 1",
  //   },
  //   {
  //     title: "Test Article 2",
  //     createdAt: new Date(),
  //     description: "Test description 2",
  //   },
  // ];
  response.render("index", { articles: articles });
});

// set up server
app.listen(3000);
