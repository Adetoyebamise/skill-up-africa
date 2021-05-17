const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class phraseYourTodo extends Model {}
  phraseYourTodo.init(
    {
      // Define model attributes
      uniqueid: DataTypes.STRING,
      description: DataTypes.STRING,
      iscompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "phraseYourTodo", // choose model name
    }
  );
  return phraseYourTodo;
};
