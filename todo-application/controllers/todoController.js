const TodoService = require("../services/TodoService");

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
};
