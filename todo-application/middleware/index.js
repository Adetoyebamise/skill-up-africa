// TODO: organised the middleware to have its own file. Just like the route .
const bodyParser = require("body-parser");
const path = require("path");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // setup template
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../server-rendering-app"));
};
