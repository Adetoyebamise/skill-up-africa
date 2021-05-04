const fs = require("fs");

console.log(`started`);
// fs.readdir(__dirname, (error, files) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(files);
//     console.log(`Done with the file`);
//   }
// });
// console.log(`First tick`);

// Convert to promise using the util module
const { promisify } = require("util");
const myFSPromisified = promisify(fs.readdir);

const files = myFSPromisified(__dirname);
//console.log(files);

myFSPromisified(__dirname)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => console.log(error));
