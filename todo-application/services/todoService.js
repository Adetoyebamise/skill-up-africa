const { prototype } = require("../controllers/TodoController");
const { v4: uuidv4 } = require("uuid");

// CRUD
const todosDB = [];

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   */
  static async createTodo(description) {
    let newTodo = {
      uniqueId: uuidv4(),
      description: description,
      isCompleted: false,
    };

    todosDB.push(newTodo);

    return newTodo;
  }
};

// job queue
