const todoRoute = require("./todoRoutes");

module.exports = (app) => {
  app.get("/", (request, response) => {
    response.json({ success: "You just Ping me !" });
  });

  app.use("/health", (request, response) => {
    response.send("I'm in a good working condition");
  });

  app.use("/todos", todoRoute);
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
