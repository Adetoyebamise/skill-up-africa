const mongoose = require("mongoose");
const author = require("./author");
const path = require("path");
const coverImageBasePath = "uploads/bookCovers";

// Define schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  coverImageName: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Author",
  },
});

// create a virtual property
bookSchema.virtual("coverImagePath").get(function () {
  if (this.coverImageName != null) {
    return path.join("/", coverImageBasePath, this.coverImageName);
  }
});
//export the model : name of the database and the name of the Schema;
module.exports = mongoose.model("Book", bookSchema);

// export as a name variable;
module.exports.coverImageBasePath = coverImageBasePath;
