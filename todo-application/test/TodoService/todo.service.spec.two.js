const { expect } = require("chai");
const sequelize = require("sequelize-mock");
const proxyquire = require("proxyquire");
const TodoService = require("../../services/todoService");
const Model = require("../../models/sequelize");
const { Todo } = require("../../models/sequelize");

const databaseMock = new sequelizeMock();

// Fake implementation of the todo.
const todoStub = databaseMock.define({
  id: 4,
  uniqueid: "c438c653-39fb-49d6-9bc2-6a8785c26966",
  description: "This is a test Todo",
  isCompleted: false,
  updatedAt: "2021-05-16 22:42:08",
  createdAt: "2021-05-16 00:00:00",
});

const mockTodo = {
  id: 4,
  uniqueid: "c438c653-39fb-49d6-9bc2-6a8785c26966",
  description: "This is a test Todo",
  isCompleted: false,
  updatedAt: "2021-05-16 22:42:08",
  createdAt: "2021-05-16 00:00:00",

  instanceMethods: {
    getModel: function () {
      return {
        id: this.get("id"),
        uniqueid: this.get("uniqueid"),
        description: this.get("description"),
        isCompleted: this.get("isCompleted"),
        updatedAt: this.get("updatedAt"),
        createdAt: this.get("createdAt"),
      };
    },
  },
};

describe("TodoService", () => {
  beforeEach(() => {
    proxyquire("../../service/TodoService", {
      "../models/sequelize": modelStub,
    });
    modelStub.Todo.create = async function (description) {
      return mockTodo;
    };
  });

  it("can create a Todo", async () => {
    // let result = await TodoService.createTodo("This is a test Todo");
    let result = Model.Todo.findOne({ where: { id: 4 } });
    // result = result.dataValues;
    console.log("Result:", result);

    expect(result).to.deep.equal(mockTodo);
  });
});
