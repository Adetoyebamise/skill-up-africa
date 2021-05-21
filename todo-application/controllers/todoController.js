const TodoService = require("../services/todoService");

module.exports = class TodoController {
  static async createTodo(request, response) {
    try {
      let newTodo = await TodoService.createTodo(request.body.description);
      response
        .status(201)
        .json({ code: "SUCCESS", success: newTodo, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "Oops you cannot create todo at the moment",
      });
    }
  }
  static async getAllTodos(request, response) {
    try {
      let todoList = await TodoService.getAllTodos(todoList);
      response
        .status(201)
        .json({ code: "SUCCESS", success: todoList, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.stack || "Oops you cannot create todo at the moment",
      });
    }
  }
  static async getTodoById(request, response) {
    try {
      let foundTodo = await TodoService.getTodoById(request.params.id);
      response
        .status(201)
        .json({ code: "SUCCESS", success: foundTodo, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "Oops you cannot create todo at the moment",
      });
    }
  }
  static async deleteTodoById(request, response) {
    try {
      let deleteTodo = await TodoService.deleteTodoById(request.params.id);
      response
        .status(201)
        .json({ code: "SUCCESS", success: deleteTodo, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "Oops you cannot create todo at the moment",
      });
    }
  }
  static async getTodoByProperty(request, response) {
    try {
      let getTodo = await TodoService.getTodoByProperty(
        request.params.id,
        request.body
      );
      response
        .status(201)
        .json({ code: "SUCCESS", success: getTodo, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "Oops you cannot create todo at the moment",
      });
    }
  }
  static async sortTodoDesription(request, response) {
    try {
      let sortTodo = await TodoService.sortTodoDesription(
        request.body.description
      );
      response
        .status(201)
        .json({ code: "SUCCESS", success: sortTodo, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "Oops internal server error",
      });
    }
  }
};
