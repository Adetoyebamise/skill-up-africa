const todoRoute = require("./todoRoutes");

module.exports = (app) => {
  app.use("/health", (request, response) => {
    response.send("I'm in a good working condition");
  });

  app.use("/todos", todoRoute);

  app.get("/", (request, response) => {
    console.log(`I go here`);
    response.json({ success: "You just Ping me !" });
  });
};

// Route
// middleware use function with route pattern and handler
// http verb of the express function
// middleware use function with route pattern and exported router module

// User Module
// Post Module

// /users => all user
// /users/:id => particular user /users/ade

// /posts => all user
// /posts/:id => particular post
