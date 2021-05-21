const Sequelize = require("sequelize");
const configs = require("../../configs/configs.json");
const Todo = require("./todoModel");
const sequelize = new Sequelize(configs.mysql.options);

sequelize
  .authenticate()
  .then(() => console.log("Database connected : I'm in"))
  .catch((error) => console.log(error.message || "Ooops! mysql failed"));

let db = {};
db["Todo"] = Todo(sequelize, Sequelize.DataTypes);

module.exports = db;
