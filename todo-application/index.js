const express = require("express");
const routes = require("./routes");
const multer = require("multer");
const bodyParser = require("body-parser"); // queryString or qs

const upload = multer();

const app = express();

// TODO organised the middleware to have its own file. Just like the route .

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO add a rate limiter to this application

routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});
