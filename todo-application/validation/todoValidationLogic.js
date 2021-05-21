// Todo 1: Write a custom validator that uses only javascript to validate this application need.

module.exports = class TodoValidationLogic {
  // description are composed of only letters.
  static async todoCreationLogic(description) {
    let error = {};
    let booleanValue;

    // description must not have alphabet
    if (description != /[A-Za-z]/) {
      error.description = "Sorry, description are composed of only letters";
    }

    // description must not have number
    if ((description = /[0-9]/)) {
      error.description = "Sorry, description are composed of only letters";
    }

    // description is not a boolean value
    if (booleanValue == true || false) {
      error.description = "Sorry, descripton are only composed of letters";
    } else {
      error.description = "null";
    }
  }
};
