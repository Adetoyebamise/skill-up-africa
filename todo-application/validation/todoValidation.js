const validator = require("validator");
const common = require("./common");

module.exports = class TodoValidation {
  // description cannot be empty. We dont want only numbers. we dont want boolean - Product manager.
  static async todoCreation(description) {
    let error = {};

    // if (Validator.isEmpty(description)) {
    //   error.description = "We do not accept empty description";
    // }

    // working with the class from common file
    if (common.isEmpty(description)) {
      error.description = "We do not accept empty description";
    }

    if (Validator.isNumeric(description)) {
      error.description = "We do not accept only digit";
    }

    if (Validator.isBoolean(description)) {
      error.description = "We do not accept boolean values";
    }

    // if (Validator.isEmpty(description)) {
    //   error.description = "We do not accept empty description";
    // }

    return {
      error,
      isValid: Object.keys(error).length == 0,
    };
  }

  // Todo 2: Complete other validation of the TodoService using validator package or other third party solution;
  static async todoGetAll(description) {
    let error = {};
    if (!description) {
      error.description =
        "Missing description: Cannot get the data you are asking for";
    }
    return {
      error,
      isValid: Object.keys(error).length == 0,
    };
  }
};
