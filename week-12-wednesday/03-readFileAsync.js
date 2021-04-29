const fs = require("fs");

console.log(`started`);
fs.readdir(__dirname, (error, files) => {
  if (error) {
  } else {
    console.log(files);
    console.log(`done ready files`);
  }
});

console.log(`First tick`);

//to convert callack to proise using the fs promisemodule

const mySpecialFunction = (async() = {});

mySpecialFunction();
