const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const TodoController = require("../controllers/todoController");

const TodoService = require("../services/todoService");
// const frontendTodoController = require("../controllers/frontendTodoController");

/**
 * @description list all todos
 * @api /todos
 */

router.get("/todos", async (request, response) => {
  const todoList = await TodoService.getAllTodos();
  response.render("index", { phraseYourTodos: [todoList] });
});

// router.get("/todos", async (request, response) => {
//   console.log("User phrase another todo");
//   const todoList = await frontendTodoController.getAllTodos(request, response);
//   response.render("index", { phraseYourTodos: [todoList] });
// });

/**
 * @description list all todos
 * @api /api/v1/todos
 */
router.get("/", (request, response) => {
  console.log("get all");
  TodoController.createTodo(request, response);
});

/**
 * @description create a Todo unique id, description, isCompleted ; application.json
 */
router.get("/", (request, response) => {
  console.log("user created todo");
  TodoController.createTodo(request, response);
});

router.post("/", (request, response) => {
  console.log("next stop");
  TodoController.sortTodoDesription(request, response);
});

/* List all todos */

// CRUD
// const todosDB = [];

/* Create a Todo (request by user) - unique id, description, isCompleted // application/json */

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
