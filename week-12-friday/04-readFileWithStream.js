const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const stream = fs.createReadStream(__dirname + "/01-package.json");
  stream.pipe(response);
});
server.listen(3000);
