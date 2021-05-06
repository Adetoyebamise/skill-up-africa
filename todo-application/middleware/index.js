const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get("/", (request, response) => {
    console.log(`I go here`);
    response.json({ success: "You just Ping me !" });
  });
};
