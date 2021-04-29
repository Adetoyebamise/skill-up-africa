const fs = require("fs");
console.log(`started`);
fs.readdir(__dirname, (error, files) => {
  if (error) {
    throw error;
  } else {
    console.log(files);
    console.log(`Done with the file`);
  }
});
const { promisify } = require("util");
//Todo : Convert to promise using the util module
const { promisify } = require("util");
const myFSPromisified = promisify(fs.readdir);

const files = myFSPromisified(__dirname);
