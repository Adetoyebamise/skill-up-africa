const express = require("express");
const router = express.Router();
const Book = require("../models/book");
// Home Page: localhost:3000/
router.get("/", async (request, response) => {
  // response.render("index.ejs");
  let books;
  try {
    books = await Book.find()
      .sort({
        createdAt: "desc",
      })
      .limit(10)
      .exec();
  } catch {
    books = [];
  }
  response.render("index", { books: books });
});

module.exports = router;
