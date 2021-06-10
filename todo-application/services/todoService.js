const { request } = require("express");
const { v4: uuidv4 } = require("uuid");
// const Todo = require("../models/mongoose/todo");
const db = require("../models/sequelize");
const validator = require("../validation/todoValidationLogic");

// CRUD Operations;

const todosDB = [];

module.exports = class TodoService {
  /**
   * @param {string} description The description of the Todo;
   *
   */
  static async createTodo(description) {
    console.log("I am running validation");

    const { error, isValid } = await TodoValidationLogic.todoCreation(
      description
    );

    if (!isValid) {
      console.log("Validation failss for create todo");

      throw new Error(error.description);
    }

    console.log("Validation pass for create todo");

    console.log("I am about to create a todo on my database");
    // working with the mysql database

    let newTodo = db.Todo.create({
      uniqueid: uuidv4(),
      description,
      iscompleted: false,
    });

    console.log("Done creating");
    return newTodo;

    // working with mondodb database
    // let newTodo = new Todo();
    // newTodo.uniqueId = uuidv4();
    // newTodo.description = description;
    // newTodo.isCompleted = false;

    // return newTodo.save();

    // working with the declared todoDataBase Line 9;
    // let newTodo = {
    //   uniqueId: uuidv4(),
    //   description: description,
    //   isCompleted: false,
    // };

    // todosDB.push(newTodo);
    // return newTodo;
  }

  static async todoGetAll(description) {
    const { error, isValid } = await TodoValidationLogic.todoGetAll(
      description
    );

    if (!isValid) {
      throw new Error(error.description);
    }
  }

  /*
   * working with mysql database;
   * @returns {todoList} of description
   */

  static async getAllTodos(todoList) {
    return todoList.find(todoList);

    // working with the local database on line 9;
    // let newTodo = {
    //   uniqueId: uuidv4(),
    //   description: description,
    //   isCompleted: false,
    // };

    // todosDB.push(newTodo);
  }

  /**
   * moongose method of querying and modifying the database;
   * @description returns a specific todo by its unique id;
   * @param {string} id means Todo unique Id;
   *
   */
  static async getTodoById(id) {
    return Todo.findOne({ uniqueId: id });
  }
  /**
   * moongose method of querying and modifying the database;
   * @description returns a specific todo by its unique id;
   * @param {string} id means Todo unique Id;
   *
   */
  static async deleteTodoById(id) {
    return Todo.findOneAndRemove({ uniqueId: id });
  }

  // working with the declared todoDataBase Line 9;
  static sortTodoDesription(description) {
    let sortTodo = {
      uniqueId: uuidv4(),
      description: description,
      isCompleted: false,
    };

    todosDB.sort(sortTodo);

    return sortTodo;
  }

  /**
   *   Todo 3: Validate the user is sending property description;
   *   Working with mysql database; Get todo property find by primary key;
   * @param {*} description
   * @returns
   */

  static async getTodoByProperty(description) {
    const getTodoByPK = await todoList.findByPK(2);
    return getTodoByPK;
  }
};

// job queue;
