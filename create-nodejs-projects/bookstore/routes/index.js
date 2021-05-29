const express = require("express");
const router = express.Router();

// Home Page: localhost:3000/
router.get("/", (request, response) => {
  response.render("index.ejs");
});

module.exports = router;
