fs = require("fs");

data = fs.readdirSync(__dirname);
console.log("data:", data);
console.log("this comes after");
