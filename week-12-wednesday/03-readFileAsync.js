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

// convert callack to promise using the fs promise module

const mySpecialFunction = async () => {
  const files = await fs.readdir(__dirname);
  console.log(file);
};

mySpecialFunction();
fs.readdir(__dirname)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
