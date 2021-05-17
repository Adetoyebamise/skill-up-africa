const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class phraseYourTodo extends Model {}
  phraseYourTodo.init(
    {
      uniqueid: DataTypes.STRING,
      description: DataTypes.STRING,
      iscompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "phraseYourTodo",
    }
  );
  return phraseYourTodo;
};
