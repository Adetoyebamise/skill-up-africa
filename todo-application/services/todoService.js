const { v4: uuidv4 } = require("uuid");
const Todo = require("../models/mongoose/todo");
const db = require("../models/sequelize");

// CRUD
// const todosDB = [];

module.exports = class TodoService {
  /**
   * @param {string} description The description of the Todo
   *
   */
  static async createTodo(description) {
    // let newTodo = new Todo();
    // newTodo.uniqueId = uuidv4();
    // newTodo.description = description;
    // newTodo.isCompleted = false;

    // return newTodo.save();

    // let newTodo = {
    //   uniqueId: uuidv4(),
    //   description: description,
    //   isCompleted: false,
    // };

    // todosDB.push(newTodo);

    // return newTodo;
    let newTodo = db.Todo.create({
      uniqueid: uuidv4(),
      description,
      iscompleted: false,
    });
    return newTodo;
    // get todo by property.
  }
  static async getAllTodos(description) {
    return Todo.find().sort({ description: 1 });

    // let newTodo = {
    //   uniqueId: uuidv4(),
    //   description: description,
    //   isCompleted: false,
    // };

    // todosDB.push(newTodo);
  }

  /**
   * @description returns a specific todo b its unique id
   * @param {string} id means Todo unique Id
   *
   */
  static async getTodoById(id) {
    return Todo.findOne({ uniqueId: id });
  }
  /**
   * @description returns a specific todo b its unique id
   * @param {string} id means Todo unique Id
   *
   */
  static async deleteTodoById(id) {
    return Todo.findOneAndRemove({ uniqueId: id });
  }

  static sortTodoDesription(description) {
    let sortTodo = {
      uniqueId: uuidv4(),
      description: description,
      isCompleted: false,
    };

    todosDB.sort(sortTodo);

    return sortTodo;
  }
};

// job queue
