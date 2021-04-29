const fs = require("fs");
fs.readdir(__dirname, (error, data) => {
  console.log(data);
});
