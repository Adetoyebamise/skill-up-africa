const fs = require("fs"); //file system module
//create file
fs.writeFile("output.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file succecfully created");
    fs.readFile("output.txt", "utf8", (error, file) => {
      if (error) {
        console.log(error);
      } else {
        console.log(file);
      }
    });
  }
});
