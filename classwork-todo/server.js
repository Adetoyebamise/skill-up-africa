const http = require("http");
const fs = require("fs");
const path = require("path");

// local server to receive data
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application.json" });
  const readableStream = fs.createReadStream(__dirname + "app.js");
  readableStream.pipe(response);
});

server.listen(3000, () => {
  console.log("listening to port", server.address().port);
});
