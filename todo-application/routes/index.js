const todoRoute = require("./todoRoutes");
const TodoService = require("../services/todoService");

module.exports = (app) => {
  app.get("/todos", todoRoute);

  app.get("/todos", async (request, response) => {
    const todoList = await TodoService.createTodo();
    response.render("index", { phraseYourTodos: [todoList] });
  });

  app.get("/todos/developerdoc", (request, response) => {
    response.status(404).send(`<h3>Not Found</h3>`);
  });

  app.use("/todos/api/v1/todos", todoRoute);
};
