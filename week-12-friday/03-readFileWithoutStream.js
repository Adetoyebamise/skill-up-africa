const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  fs.readFile(__dirname + "/01-package.json", (error, data) => {
    if (error) {
      console.log(error);
    }
    response.end(data);
  });
});
server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
