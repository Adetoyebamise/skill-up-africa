const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// get all authors route: authors/
router.get("/", async (request, response) => {
  let searchOptions = {};
  if (request.query.name != null && request.query.name !== "") {
    searchOptions.name = new RegExp(request.query.name, "i");
  }
  try {
    const authors = await Author.find({});
    response.render("authors/index.ejs", {
      authors: authors,
      serachOptions: request.query,
    });
  } catch (error) {
    response.redirect("authors");
    error.stack;
  }
});

//New Author routes: authors/new
router.get("/new", (request, response) => {
  response.render("authors/new.ejs", { author: new Author() });
});

// create author route : authors
router.post("/", async (request, response) => {
  const authors = new Author({
    name: request.body.name,
  });
  // console.log(author.name);
  try {
    const newAuthor = await author.save({ authors: author.name });
    console.log(newAuthor);
    // response.redirect("authors/${newAuthor.id}");
    response.redirect("authors");
  } catch (error) {
    response.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});

module.exports = router;
