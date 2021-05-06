const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

// CRUD
const todosDB = [];

/* List all todos */

router.get("/", (request, response) => {
  response.json({ code: "SUCCESS", success: todosDB, error: null });
});

/* Create a Todo - unique id, description, isCompleted // application/json */

router.post("/", (request, response) => {
  let newTodo = {
    uniqueId: uuidv4(),
    description: request.body.description,
    isCompleted: false,
  };

  todosDB.push(newTodo);

  response.status(201).json({ code: "SUCCESS", success: newTodo, error: null });
});

/*  Get a Todo by unique id */

router.get("/:id", (request, response) => {
  let todoId = request.params.id;

  let foundTodo = todosDB.find((todo) => todo.uniqueId == todoId);

  response.json({ code: "SUCCESS", success: foundTodo, error: null });

  // TODO return a proper response to the user when no todo is found.
});

router.delete("/:id", (request, response) => {
  // TODO Implement this route
  let todoId = request.params.id;
  if (todoId) {
    response.send("todo deleted");
    response.json({ code: "success", error: null });
  } else {
    throw error;
  }
  response.send("todo deleted");
});

module.exports = router;
