fs = require("fs");

function phoneNumber(error, data) {
  console.log("data: ", data);
}
fs.readdir(__dirname, phoneNumber);
console.log("this comes after");
