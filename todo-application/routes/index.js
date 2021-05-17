const todoRoute = require("./todoRoutes");
const TodoService = require("../services/todoService");

module.exports = (app) => {
  app.get("/", (request, response) => {
    response.json({ success: "You just Ping me !" });
  });
  app.use("/health", (request, response) => {
    response.send("I'm in a good working condition");
  });
  app.get("/todos", async (request, response) => {
    const todoList = await TodoService.createTodo();
    response.render("index", { phraseYourTodo: [todoList] });
  });
  app.get("/todos/developerdoc", (request, response) => {
    response.status(404).send(`<h3>Not Found</h3>`);
  });

  app.use("/todos/api/v1/todos", todoRoute);
};
