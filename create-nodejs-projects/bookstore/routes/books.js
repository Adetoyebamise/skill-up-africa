const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Book = require("../models/book");
const uploadPath = path.join("public", Book.coverImageBasePath);
const Author = require("../models/author");
const { fstat } = require("fs");
const imageMimeTypes = ["images/jpeg", "images/png", "images/gif"];
const upload = multer({
  dest: uploadPath,
  fileFilter: (request, file, callback) => {
    callback(null, imageMimeTypes.includes(file.mimetype));
  },
});

// get all books route: books/
router.get("/", upload.single("cover"), async (request, response) => {
  // response.send("All Books");
  let query = Book.find();
  if (request.query.title != null && request.query.title != "") {
    query = query.regex("title", new RegExp(request.query.title, "i"));
  }
  if (
    request.query.publishBefore != null &&
    request.query.publishBefore != ""
  ) {
    query = query.lte("publishDate", request.query.publishBefore);
  }
  if (request.query.publishAfter != null && request.query.publishAfter != "") {
    query = query.gte("publishDate", request.query.publishAfter);
  }
  try {
    const books = await query.exec();
    response.render("books/index", {
      books: books,
      searchParams: request.query,
    });
  } catch {
    response.redirect("/");
  }
});

//New book routes: books/new
router.get("/new", async (request, response) => {
  renderNewPage(response, new Book());
});

// create book route : books
router.post("/", async (request, response) => {
  // response.send("Create Book");
  const fileName = request.file != null ? request.file.filename : null;
  const book = new Book({
    title: request.body.title,
    author: request.body.author,
    publishDate: new Date(request.body.publishDate),
    pageCount: request.body.pageCount,
    coverImageName: fileName,
    description: request.body.description,
  });
  try {
    const newBook = await book.save();
    // response.redirect(`books/${newBook.id}`);
    response.redirect(`books`);
  } catch {
    if (book.coverImageName != null) {
      removeBookCover(book.coverImageName);
    }
    renderNewPage(response, book, true);
  }
});

function removeBookCover(fileName) {
  fs.unlink(path.join(uploadPath, fileName), (error) => {
    if (error) console.error(error);
  });
}

async function renderNewPage(response, book, hasError = false) {
  try {
    const authors = await Author.find({});
    const params = {
      authors: authors,
      book: book,
    };
    if (hasError) params.errorMessage = "Error Creating Book";
    response.render("books/new", params);
  } catch (error) {
    response.redirect("/books");
  }
}

module.exports = router;
