const fs = require("fs");
const dataOne = require("./data.json");
console.log(dataOne.name);
fs.readFile("./data.json", "utf8", (error, data) => {
  const dataTwo = JSON.parse(data);
  console.log(dataTwo.name);
});
